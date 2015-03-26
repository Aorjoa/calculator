package main
import (
    "html/template"
    "io/ioutil"
    "net/http"
)
type Page struct {
    Result string
}

func main() {
    http.HandleFunc("/", runController)
    http.ListenAndServe(":8080", nil)
}
func runController(w http.ResponseWriter, r *http.Request) {
    title := r.URL.Path[len("/"):]
    p := Page{Result: 12}
    t, _ := template.ParseFiles("index.html")
    t.Execute(w, p)
}