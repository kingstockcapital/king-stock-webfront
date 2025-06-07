import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Plus, Edit, Trash2, Search, Eye, Bold, Italic, List, Link, 
  Heading1, Heading2, Heading3, Quote, Code, ImageIcon, 
  AlignLeft, AlignCenter, AlignRight, Undo, Redo, FileText, 
  Eye as PreviewIcon, Type, Strikethrough, ListOrdered 
} from "lucide-react";
import { toast } from "sonner";

const ArticleManagement = () => {
  
  const [articles, setArticles] = useState([
    { id: 1, title: "Q4 2024 Market Analysis", author: "Admin", date: "2024-01-15", status: "Published", views: 1234 },
    { id: 2, title: "Sustainable Investment Trends", author: "Admin", date: "2024-01-10", status: "Draft", views: 0 },
    { id: 3, title: "Portfolio Diversification Strategy", author: "Admin", date: "2024-01-05", status: "Published", views: 856 },
  ]);

  const [newArticle, setNewArticle] = useState({
    title: "",
    author: "",
    content: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editorMode, setEditorMode] = useState<'edit' | 'preview'>('edit');
  const [cursorPosition, setCursorPosition] = useState({ start: 0, end: 0 });

  
  const handleAddArticle = () => {
    if (!newArticle.title || !newArticle.author || !newArticle.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    const article = {
      id: articles.length + 1,
      title: newArticle.title,
      author: newArticle.author,
      date: new Date().toISOString().split('T')[0],
      status: "Draft",
      views: 0
    };

    setArticles([...articles, article]);
    setNewArticle({ title: "", author: "", content: "" });
    setIsDialogOpen(false);
    toast.success("Article added successfully!");
  };

  const handleDeleteArticle = (id: number) => {
    setArticles(articles.filter(article => article.id !== id));
    toast.success("Article deleted!");
  };

  const insertTextAtCursor = (textarea: HTMLTextAreaElement, text: string) => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const content = newArticle.content;
    const newContent = content.substring(0, start) + text + content.substring(end);
    setNewArticle({...newArticle, content: newContent});
    
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
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
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

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-serif font-bold text-ksc-navy mb-2">
            Article Management
          </h2>
          <p className="text-gray-600">
            Manage all research articles and insights
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-ksc-navy hover:bg-ksc-navy/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Article
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl max-h-[95vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-xl font-serif">Create New Article</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              
              <div className="grid grid-cols-2 gap-4">
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
              
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Content *</Label>
                  <Tabs value={editorMode} onValueChange={(value) => setEditorMode(value as 'edit' | 'preview')}>
                    <TabsList className="grid w-fit grid-cols-2">
                      <TabsTrigger value="edit" className="flex items-center gap-2">
                        <Type className="h-4 w-4" />
                        Editor
                      </TabsTrigger>
                      <TabsTrigger value="preview" className="flex items-center gap-2">
                        <PreviewIcon className="h-4 w-4" />
                        Preview
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                <Card className="border-2">
                  
                  <div className="border-b bg-gray-50/50 p-3">
                    <div className="flex flex-wrap items-center gap-1">
                      
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('bold')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Bold (Ctrl+B)"
                        >
                          <Bold className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('italic')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Italic (Ctrl+I)"
                        >
                          <Italic className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('strikethrough')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Strikethrough"
                        >
                          <Strikethrough className="h-4 w-4" />
                        </Button>
                      </div>

                      <Separator orientation="vertical" className="h-6 mx-1" />

                      
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('h1')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Heading 1"
                        >
                          <Heading1 className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('h2')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Heading 2"
                        >
                          <Heading2 className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('h3')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Heading 3"
                        >
                          <Heading3 className="h-4 w-4" />
                        </Button>
                      </div>

                      <Separator orientation="vertical" className="h-6 mx-1" />

                      
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('unordered-list')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Bullet List"
                        >
                          <List className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('ordered-list')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Numbered List"
                        >
                          <ListOrdered className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('quote')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Quote"
                        >
                          <Quote className="h-4 w-4" />
                        </Button>
                      </div>

                      <Separator orientation="vertical" className="h-6 mx-1" />

                      
                      <div className="flex items-center gap-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('link')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Insert Link"
                        >
                          <Link className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('image')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Insert Image"
                        >
                          <ImageIcon className="h-4 w-4" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFormatting('code')}
                          className="h-8 w-8 p-0 hover:bg-gray-200"
                          title="Code"
                        >
                          <Code className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="ml-auto text-xs text-gray-500 hidden sm:block">
                        Markdown supported • Ctrl+B for bold • Ctrl+I for italic
                      </div>
                    </div>
                  </div>
                  
                  
                  <div className="min-h-[500px]">
                    {editorMode === 'edit' ? (
                      <Textarea
                        id="content-editor"
                        value={newArticle.content}
                        onChange={(e) => setNewArticle({...newArticle, content: e.target.value})}
                        placeholder="Start writing your article content here...

You can use markdown formatting:
- **Bold text** or *italic text*
- # Large headings or ## smaller headings
- > Blockquotes for important notes
- [Links](https://example.com) and ![Images](image-url)
- `inline code` or code blocks
- Lists with bullets or numbers

The toolbar above provides quick formatting options. Happy writing!"
                        className="min-h-[500px] border-0 rounded-none resize-none focus-visible:ring-0 text-sm leading-relaxed font-mono"
                        style={{ fontSize: '14px', lineHeight: '1.6' }}
                      />
                    ) : (
                      <div className="p-6 min-h-[500px] prose prose-sm max-w-none">
                        {newArticle.content ? (
                          <div 
                            className="text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ 
                              __html: renderMarkdownPreview(newArticle.content) 
                            }} 
                          />
                        ) : (
                          <div className="text-gray-400 text-center mt-20">
                            <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                            <p>Start writing in the editor to see preview here</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>Characters: {newArticle.content.length}</span>
                    <span>Words: {newArticle.content.split(/\s+/).filter(word => word.length > 0).length}</span>
                  </div>
                  <span>Auto-saved • Last saved: Never</span>
                </div>
              </div>
              
              
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    
                    toast.success("Article saved as draft!");
                  }}
                >
                  Save as Draft
                </Button>
                <Button onClick={handleAddArticle} className="bg-ksc-navy hover:bg-ksc-navy/90">
                  Publish Article
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      
      <Card>
        <CardHeader>
          <CardTitle>Article List ({filteredArticles.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Date Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>{article.date}</TableCell>
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
                      <Button variant="outline" size="sm">
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
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleManagement;
