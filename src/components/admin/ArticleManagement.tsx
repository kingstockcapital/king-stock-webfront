
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Search, Eye, Bold, Italic, List, Link } from "lucide-react";
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
    
    // Set cursor position after inserted text
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  const handleFormatting = (format: string) => {
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
    if (!textarea) return;

    const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    
    switch (format) {
      case 'bold':
        insertTextAtCursor(textarea, selectedText ? `**${selectedText}**` : '**bold text**');
        break;
      case 'italic':
        insertTextAtCursor(textarea, selectedText ? `*${selectedText}*` : '*italic text*');
        break;
      case 'list':
        insertTextAtCursor(textarea, '\n- List item');
        break;
      case 'link':
        insertTextAtCursor(textarea, selectedText ? `[${selectedText}](url)` : '[link text](url)');
        break;
    }
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
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Add New Article</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
                    placeholder="Enter article title"
                  />
                </div>
                <div>
                  <Label htmlFor="author">Author *</Label>
                  <Input
                    id="author"
                    value={newArticle.author}
                    onChange={(e) => setNewArticle({...newArticle, author: e.target.value})}
                    placeholder="Enter author name"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="content-editor">Content *</Label>
                <div className="border rounded-md">
                  {/* Formatting Toolbar */}
                  <div className="flex items-center gap-2 p-2 border-b bg-gray-50">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatting('bold')}
                      className="h-8 w-8 p-0"
                    >
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatting('italic')}
                      className="h-8 w-8 p-0"
                    >
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatting('list')}
                      className="h-8 w-8 p-0"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatting('link')}
                      className="h-8 w-8 p-0"
                    >
                      <Link className="h-4 w-4" />
                    </Button>
                    <div className="ml-auto text-xs text-gray-500">
                      Markdown formatting supported
                    </div>
                  </div>
                  
                  {/* Text Editor */}
                  <Textarea
                    id="content-editor"
                    value={newArticle.content}
                    onChange={(e) => setNewArticle({...newArticle, content: e.target.value})}
                    placeholder="Write your article content here... You can use markdown formatting:

**Bold text**
*Italic text*
- List items
[Link text](url)

## Headers
### Subheaders

Start writing your content..."
                    className="min-h-[400px] border-0 rounded-none resize-none focus-visible:ring-0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Use markdown syntax for formatting. Preview will be available after saving.
                </p>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddArticle} className="bg-ksc-navy hover:bg-ksc-navy/90">
                  Save Article
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {/* Articles Table */}
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
