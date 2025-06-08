import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Plus, Edit, Trash2, Search, Eye, Bold, Italic, List, Link, 
  Heading1, Heading2, Heading3, Quote, Code, ImageIcon, 
  AlignLeft, Type, Strikethrough, ListOrdered, RotateCcw, FileText
} from "lucide-react";
import { toast } from "sonner";
import { 
  getAllArticles, 
  addArticle, 
  deleteArticle, 
  updateArticle, 
  getDeletedArticles, 
  restoreArticle, 
  permanentlyDeleteArticle,
  type Article 
} from "@/data/articles";

const ArticleManagement = () => {
  const [articles, setArticles] = useState<Article[]>(getAllArticles());
  const [deletedArticles, setDeletedArticles] = useState<Article[]>(getDeletedArticles());
  const [activeView, setActiveView] = useState<'active' | 'trash'>('active');

  const [newArticle, setNewArticle] = useState({
    title: "",
    author: "",
    content: "",
    summary: "",
    category: "",
    tags: [] as string[]
  });

  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editorMode, setEditorMode] = useState<'edit' | 'preview'>('edit');

  const refreshData = () => {
    setArticles(getAllArticles());
    setDeletedArticles(getDeletedArticles());
  };

  const handleAddArticle = () => {
    if (!newArticle.title || !newArticle.author || !newArticle.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    addArticle({
      title: newArticle.title,
      author: newArticle.author,
      content: newArticle.content,
      summary: newArticle.summary,
      category: newArticle.category || "General",
      date: new Date().toLocaleDateString(),
      status: "Draft",
      tags: newArticle.tags,
      views: 0,
      readTime: `${Math.ceil(newArticle.content.split(' ').length / 200)} min read`
    });

    refreshData();
    setNewArticle({ title: "", author: "", content: "", summary: "", category: "", tags: [] });
    setIsDialogOpen(false);
    toast.success("Article added successfully!");
  };

  const handleEditArticle = () => {
    if (!editingArticle || !editingArticle.title || !editingArticle.author || !editingArticle.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    updateArticle(editingArticle.id, {
      title: editingArticle.title,
      author: editingArticle.author,
      content: editingArticle.content,
      summary: editingArticle.summary,
      category: editingArticle.category,
      tags: editingArticle.tags,
      readTime: `${Math.ceil(editingArticle.content.split(' ').length / 200)} min read`
    });

    refreshData();
    setEditingArticle(null);
    setIsEditDialogOpen(false);
    toast.success("Article updated successfully!");
  };

  const handleDeleteArticle = (id: number) => {
    deleteArticle(id);
    refreshData();
    toast.success("Article moved to trash!");
  };

  const handleRestoreArticle = (id: number) => {
    restoreArticle(id);
    refreshData();
    toast.success("Article restored successfully!");
  };

  const handlePermanentDelete = (id: number) => {
    permanentlyDeleteArticle(id);
    refreshData();
    toast.success("Article permanently deleted!");
  };

  const handleUpdateStatus = (id: number, status: 'Published' | 'Draft') => {
    updateArticle(id, { status });
    refreshData();
    toast.success(`Article ${status.toLowerCase()} successfully!`);
  };

  const openEditDialog = (article: Article) => {
    setEditingArticle({ ...article });
    setIsEditDialogOpen(true);
  };

  const insertTextAtCursor = (textarea: HTMLTextAreaElement, text: string) => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const content = isEditDialogOpen ? editingArticle?.content || '' : newArticle.content;
    const newContent = content.substring(0, start) + text + content.substring(end);
    
    if (isEditDialogOpen && editingArticle) {
      setEditingArticle({...editingArticle, content: newContent});
    } else {
      setNewArticle({...newArticle, content: newContent});
    }
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  const wrapSelectedText = (textarea: HTMLTextAreaElement, prefix: string, suffix: string = '') => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const finalSuffix = suffix || prefix;
    
    if (selectedText) {
      insertTextAtCursor(textarea, `${prefix}${selectedText}${finalSuffix}`);
    } else {
      insertTextAtCursor(textarea, `${prefix}text${finalSuffix}`);
    }
  };

  const handleFormatting = (format: string) => {
    const textareaId = isEditDialogOpen ? 'edit-content-editor' : 'content-editor';
    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    if (!textarea) return;

    const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    switch (format) {
      case 'bold':
        wrapSelectedText(textarea, '**');
        break;
      case 'italic':
        wrapSelectedText(textarea, '*');
        break;
      case 'strikethrough':
        wrapSelectedText(textarea, '~~');
        break;
      case 'paragraph':
        insertTextAtCursor(textarea, selectedText ? `\n${selectedText}\n` : '\nParagraph text\n');
        break;
      case 'h1':
        insertTextAtCursor(textarea, selectedText ? `\n# ${selectedText}\n` : '\n# Heading 1\n');
        break;
      case 'h2':
        insertTextAtCursor(textarea, selectedText ? `\n## ${selectedText}\n` : '\n## Heading 2\n');
        break;
      case 'h3':
        insertTextAtCursor(textarea, selectedText ? `\n### ${selectedText}\n` : '\n### Heading 3\n');
        break;
      case 'quote':
        insertTextAtCursor(textarea, selectedText ? `\n> ${selectedText}\n` : '\n> Quote text\n');
        break;
      case 'code':
        if (selectedText) {
          if (selectedText.includes('\n')) {
            insertTextAtCursor(textarea, `\n\`\`\`\n${selectedText}\n\`\`\`\n`);
          } else {
            wrapSelectedText(textarea, '`');
          }
        } else {
          insertTextAtCursor(textarea, '`code`');
        }
        break;
      case 'unordered-list':
        insertTextAtCursor(textarea, '\n- List item\n');
        break;
      case 'ordered-list':
        insertTextAtCursor(textarea, '\n1. Numbered item\n');
        break;
      case 'link':
        if (selectedText) {
          insertTextAtCursor(textarea, `[${selectedText}](url)`);
        } else {
          insertTextAtCursor(textarea, '[link text](url)');
        }
        break;
      case 'image':
        insertTextAtCursor(textarea, '![alt text](image-url)');
        break;
      case 'line':
        insertTextAtCursor(textarea, '\n---\n');
        break;
    }
  };

  const renderMarkdownPreview = (content: string) => {
    // Simple markdown preview (in production, use a proper markdown parser)
    return content
      .replace(/^# (.+)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
      .replace(/^## (.+)/gm, '<h2 class="text-2xl font-bold mb-3">$1</h2>')
      .replace(/^### (.+)/gm, '<h3 class="text-xl font-bold mb-2">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/~~(.+?)~~/g, '<del>$1</del>')
      .replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>')
      .replace(/^> (.+)/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 italic">$1</blockquote>')
      .replace(/^- (.+)/gm, '<li class="ml-4">• $1</li>')
      .replace(/^\d+\. (.+)/gm, '<li class="ml-4">$1</li>')
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-600 underline">$1</a>')
      .replace(/^---$/gm, '<hr class="my-4 border-gray-300">')
      .replace(/\n/g, '<br>');
  };

  const currentArticles = activeView === 'active' ? articles : deletedArticles;
  const filteredArticles = currentArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-ksc-navy mb-2">
            Article Management
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Manage all research articles and insights ({articles.length} active, {deletedArticles.length} in trash)
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-ksc-navy hover:bg-ksc-navy/90 w-full sm:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Add Article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[95vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl font-serif">Create New Article</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4 sm:space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title" className="text-sm font-medium">Title *</Label>
                  <Input
                    id="title"
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
                    placeholder="Enter article title"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="author" className="text-sm font-medium">Author *</Label>
                  <Input
                    id="author"
                    value={newArticle.author}
                    onChange={(e) => setNewArticle({...newArticle, author: e.target.value})}
                    placeholder="Enter author name"
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category" className="text-sm font-medium">Category</Label>
                  <Input
                    id="category"
                    value={newArticle.category}
                    onChange={(e) => setNewArticle({...newArticle, category: e.target.value})}
                    placeholder="e.g., Market Analysis"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="summary" className="text-sm font-medium">Summary</Label>
                  <Input
                    id="summary"
                    value={newArticle.summary}
                    onChange={(e) => setNewArticle({...newArticle, summary: e.target.value})}
                    placeholder="Brief article summary"
                    className="mt-1"
                  />
                </div>
              </div>
              
              
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <Label className="text-sm font-medium">Content *</Label>
                  <Tabs value={editorMode} onValueChange={(value) => setEditorMode(value as 'edit' | 'preview')}>
                    <TabsList className="grid w-fit grid-cols-2">
                      <TabsTrigger value="edit" className="flex items-center gap-2 text-xs sm:text-sm">
                        <Type className="h-3 w-3 sm:h-4 sm:w-4" />
                        Editor
                      </TabsTrigger>
                      <TabsTrigger value="preview" className="flex items-center gap-2 text-xs sm:text-sm">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                        Preview
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <Card className="border-2">
                  
                  <div className="border-b bg-gray-50/50 p-2 sm:p-3">
                    <div className="flex flex-wrap items-center gap-1">
                      
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('bold')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Bold (Ctrl+B)"
                        >
                          <Bold className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('italic')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Italic (Ctrl+I)"
                        >
                          <Italic className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('strikethrough')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Strikethrough"
                        >
                          <Strikethrough className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>

                      <Separator orientation="vertical" className="h-4 sm:h-6 mx-1" />

                      
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('paragraph')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Paragraph"
                        >
                          <AlignLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('h1')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Heading 1"
                        >
                          <Heading1 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('h2')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Heading 2"
                        >
                          <Heading2 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('h3')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Heading 3"
                        >
                          <Heading3 className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>

                      <Separator orientation="vertical" className="h-4 sm:h-6 mx-1" />

                      
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('unordered-list')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Bullet List"
                        >
                          <List className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('ordered-list')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Numbered List"
                        >
                          <ListOrdered className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('quote')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Quote"
                        >
                          <Quote className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>

                      <Separator orientation="vertical" className="h-4 sm:h-6 mx-1" />

                      
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('link')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Insert Link"
                        >
                          <Link className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('image')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Insert Image"
                        >
                          <ImageIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('code')}
                          className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                          title="Code"
                        >
                          <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>

                      <div className="ml-auto text-xs text-gray-500 hidden lg:block">
                        Markdown supported • Ctrl+B for bold • Ctrl+I for italic
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="min-h-[300px] sm:min-h-[500px]">
                    {editorMode === 'edit' ? (
                      <Textarea
                        id="content-editor"
                        value={newArticle.content}
                        onChange={(e) => setNewArticle({...newArticle, content: e.target.value})}
                        placeholder={"Start writing your article content here...\n\nYou can use markdown formatting:\n- **Bold text** or *italic text*\n- # Large headings or ## smaller headings\n- > Blockquotes for important notes\n- [Links](https://example.com) and ![Images](image-url)\n- `inline code` or code blocks\n- Lists with bullets or numbers\n\nThe toolbar above provides quick formatting options. Happy writing!"}
                        className="min-h-[300px] sm:min-h-[500px] border-0 rounded-none resize-none focus-visible:ring-0 text-sm leading-relaxed font-mono"
                        style={{ fontSize: '14px', lineHeight: '1.6' }}
                      />
                    ) : (
                      <div className="p-4 sm:p-6 min-h-[300px] sm:min-h-[500px] prose prose-sm max-w-none">
                        {newArticle.content ? (
                          <div 
                            className="text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ 
                              __html: renderMarkdownPreview(newArticle.content) 
                            }} 
                          />
                        ) : (
                          <div className="text-gray-400 text-center mt-10 sm:mt-20">
                            <FileText className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-4 opacity-50" />
                            <p className="text-sm sm:text-base">Start writing in the editor to see preview here</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 gap-2">
                  <div className="flex items-center gap-4">
                    <span>Characters: {newArticle.content.length}</span>
                    <span>Words: {newArticle.content.split(/\s+/).filter(word => word.length > 0).length}</span>
                  </div>
                  <span>Auto-saved • Last saved: Never</span>
                </div>
              </div>
              
              
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="w-full sm:w-auto">
                  Cancel
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    toast.success("Article saved as draft!");
                  }}
                  className="w-full sm:w-auto"
                >
                  Save as Draft
                </Button>
                <Button onClick={handleAddArticle} className="bg-ksc-navy hover:bg-ksc-navy/90 w-full sm:w-auto">
                  Publish Article
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Article Dialog - Similar structure with responsive improvements */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-[95vw] sm:max-w-6xl max-h-[95vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-lg sm:text-xl font-serif">Edit Article</DialogTitle>
            </DialogHeader>
            
            {editingArticle && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-title" className="text-sm font-medium">Title *</Label>
                    <Input
                      id="edit-title"
                      value={editingArticle.title}
                      onChange={(e) => setEditingArticle({...editingArticle, title: e.target.value})}
                      placeholder="Enter article title"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-author" className="text-sm font-medium">Author *</Label>
                    <Input
                      id="edit-author"
                      value={editingArticle.author}
                      onChange={(e) => setEditingArticle({...editingArticle, author: e.target.value})}
                      placeholder="Enter author name"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="edit-category" className="text-sm font-medium">Category</Label>
                    <Input
                      id="edit-category"
                      value={editingArticle.category}
                      onChange={(e) => setEditingArticle({...editingArticle, category: e.target.value})}
                      placeholder="e.g., Market Analysis"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="edit-summary" className="text-sm font-medium">Summary</Label>
                    <Input
                      id="edit-summary"
                      value={editingArticle.summary || ''}
                      onChange={(e) => setEditingArticle({...editingArticle, summary: e.target.value})}
                      placeholder="Brief article summary"
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Content Editor - Similar to create form but with edit data */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <Label className="text-sm font-medium">Content *</Label>
                    <Tabs value={editorMode} onValueChange={(value) => setEditorMode(value as 'edit' | 'preview')}>
                      <TabsList className="grid w-fit grid-cols-2">
                        <TabsTrigger value="edit" className="flex items-center gap-2 text-xs sm:text-sm">
                          <Type className="h-3 w-3 sm:h-4 sm:w-4" />
                          Editor
                        </TabsTrigger>
                        <TabsTrigger value="preview" className="flex items-center gap-2 text-xs sm:text-sm">
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                          Preview
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <Card className="border-2">
                    {/* Toolbar - same as create form */}
                    <div className="border-b bg-gray-50/50 p-2 sm:p-3">
                      <div className="flex flex-wrap items-center gap-1">
                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('bold')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Bold (Ctrl+B)"
                          >
                            <Bold className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('italic')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Italic (Ctrl+I)"
                          >
                            <Italic className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('strikethrough')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Strikethrough"
                          >
                            <Strikethrough className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>

                        <Separator orientation="vertical" className="h-4 sm:h-6 mx-1" />

                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('paragraph')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Paragraph"
                          >
                            <AlignLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('h1')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Heading 1"
                          >
                            <Heading1 className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('h2')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Heading 2"
                          >
                            <Heading2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('h3')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Heading 3"
                          >
                            <Heading3 className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>

                        <Separator orientation="vertical" className="h-4 sm:h-6 mx-1" />

                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('unordered-list')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Bullet List"
                          >
                            <List className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('ordered-list')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Numbered List"
                          >
                            <ListOrdered className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('quote')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Quote"
                          >
                            <Quote className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>

                        <Separator orientation="vertical" className="h-4 sm:h-6 mx-1" />

                        <div className="flex items-center gap-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('link')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Insert Link"
                          >
                            <Link className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('image')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Insert Image"
                          >
                            <ImageIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleFormatting('code')}
                            className="h-6 w-6 sm:h-8 sm:w-8 p-0 hover:bg-gray-200"
                            title="Code"
                          >
                            <Code className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>

                        <div className="ml-auto text-xs text-gray-500 hidden lg:block">
                          Markdown supported • Ctrl+B for bold • Ctrl+I for italic
                        </div>
                      </div>
                    </div>
                    
                    <div className="min-h-[300px] sm:min-h-[500px]">
                      {editorMode === 'edit' ? (
                        <Textarea
                          id="edit-content-editor"
                          value={editingArticle.content || ''}
                          onChange={(e) => setEditingArticle({...editingArticle, content: e.target.value})}
                          placeholder="Edit your article content here..."
                          className="min-h-[300px] sm:min-h-[500px] border-0 rounded-none resize-none focus-visible:ring-0 text-sm leading-relaxed font-mono"
                          style={{ fontSize: '14px', lineHeight: '1.6' }}
                        />
                      ) : (
                        <div className="p-4 sm:p-6 min-h-[300px] sm:min-h-[500px] prose prose-sm max-w-none">
                          {editingArticle.content ? (
                            <div 
                              className="text-sm leading-relaxed"
                              dangerouslySetInnerHTML={{ 
                                __html: renderMarkdownPreview(editingArticle.content) 
                              }} 
                            />
                          ) : (
                            <div className="text-gray-400 text-center mt-10 sm:mt-20">
                              <FileText className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-4 opacity-50" />
                              <p className="text-sm sm:text-base">No content to preview</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t">
                  <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="w-full sm:w-auto">
                    Cancel
                  </Button>
                  <Button onClick={handleEditArticle} className="bg-ksc-navy hover:bg-ksc-navy/90 w-full sm:w-auto">
                    Update Article
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* View Toggle and Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Tabs value={activeView} onValueChange={(value) => setActiveView(value as 'active' | 'trash')}>
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="active" className="flex-1 sm:flex-none text-xs sm:text-sm">
              Active Articles ({articles.length})
            </TabsTrigger>
            <TabsTrigger value="trash" className="flex-1 sm:flex-none text-xs sm:text-sm">
              Trash ({deletedArticles.length})
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:max-w-sm"
          />
        </div>
      </div>

      {/* Articles Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">
            {activeView === 'active' ? 'Active Articles' : 'Deleted Articles'} ({filteredArticles.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 sm:p-6">
          {/* Mobile Card View */}
          <div className="block sm:hidden">
            {filteredArticles.map((article) => (
              <div key={article.id} className="border-b p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-sm line-clamp-2">{article.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs flex-shrink-0 ml-2 ${
                    article.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {article.status}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <div>Author: {article.author.split(',')[0]}</div>
                  <div>Category: {article.category}</div>
                  <div>Date: {activeView === 'trash' && article.deletedAt ? new Date(article.deletedAt).toLocaleDateString() : article.date}</div>
                  <div className="flex items-center">
                    <Eye className="h-3 w-3 mr-1 text-gray-400" />
                    {article.views} views
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {activeView === 'active' ? (
                    <>
                      {article.status === 'Draft' ? (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleUpdateStatus(article.id, 'Published')}
                          className="text-green-600 hover:text-green-700 text-xs"
                        >
                          Publish
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleUpdateStatus(article.id, 'Draft')}
                          className="text-yellow-600 hover:text-yellow-700 text-xs"
                        >
                          Unpublish
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openEditDialog(article)}
                        className="text-xs"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDeleteArticle(article.id)}
                        className="text-red-600 hover:text-red-700 text-xs"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleRestoreArticle(article.id)}
                        className="text-green-600 hover:text-green-700 text-xs"
                      >
                        <RotateCcw className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handlePermanentDelete(article.id)}
                        className="text-red-600 hover:text-red-700 text-xs"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop Table View */}
          <div className="hidden sm:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell className="font-medium max-w-xs truncate">{article.title}</TableCell>
                    <TableCell className="max-w-xs truncate">{article.author.split(',')[0]}</TableCell>
                    <TableCell>{article.category}</TableCell>
                    <TableCell>{activeView === 'trash' && article.deletedAt ? new Date(article.deletedAt).toLocaleDateString() : article.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        article.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {article.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1 text-gray-400" />
                        {article.views}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        {activeView === 'active' ? (
                          <>
                            {article.status === 'Draft' ? (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleUpdateStatus(article.id, 'Published')}
                                className="text-green-600 hover:text-green-700"
                              >
                                Publish
                              </Button>
                            ) : (
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleUpdateStatus(article.id, 'Draft')}
                                className="text-yellow-600 hover:text-yellow-700"
                              >
                                Unpublish
                              </Button>
                            )}
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => openEditDialog(article)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDeleteArticle(article.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleRestoreArticle(article.id)}
                              className="text-green-600 hover:text-green-700"
                            >
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handlePermanentDelete(article.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleManagement;
