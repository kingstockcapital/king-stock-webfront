
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Search, Eye } from "lucide-react";
import { toast } from "sonner";

const ArticleManagement = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "Phân tích thị trường Q4 2024", author: "Admin", date: "2024-01-15", status: "Published", views: 1234 },
    { id: 2, title: "Xu hướng đầu tư bền vững", author: "Admin", date: "2024-01-10", status: "Draft", views: 0 },
    { id: 3, title: "Chiến lược đa dạng hóa danh mục", author: "Admin", date: "2024-01-05", status: "Published", views: 856 },
  ]);

  const [newArticle, setNewArticle] = useState({
    title: "",
    author: "",
    content: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddArticle = () => {
    if (!newArticle.title || !newArticle.author) {
      toast.error("Vui lòng điền đầy đủ thông tin");
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
    toast.success("Bài viết đã được thêm thành công!");
  };

  const handleDeleteArticle = (id: number) => {
    setArticles(articles.filter(article => article.id !== id));
    toast.success("Bài viết đã được xóa!");
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
            Quản lý bài viết
          </h2>
          <p className="text-gray-600">
            Quản lý tất cả bài viết nghiên cứu và insights
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-ksc-navy hover:bg-ksc-navy/90">
              <Plus className="h-4 w-4 mr-2" />
              Thêm bài viết
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Thêm bài viết mới</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Tiêu đề</Label>
                <Input
                  id="title"
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({...newArticle, title: e.target.value})}
                  placeholder="Nhập tiêu đề bài viết"
                />
              </div>
              <div>
                <Label htmlFor="author">Tác giả</Label>
                <Input
                  id="author"
                  value={newArticle.author}
                  onChange={(e) => setNewArticle({...newArticle, author: e.target.value})}
                  placeholder="Nhập tên tác giả"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Hủy
                </Button>
                <Button onClick={handleAddArticle} className="bg-ksc-navy hover:bg-ksc-navy/90">
                  Thêm
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
          placeholder="Tìm kiếm bài viết..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {/* Articles Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách bài viết ({filteredArticles.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tiêu đề</TableHead>
                <TableHead>Tác giả</TableHead>
                <TableHead>Ngày tạo</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Lượt xem</TableHead>
                <TableHead>Thao tác</TableHead>
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
