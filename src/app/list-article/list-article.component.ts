import { Component } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../models/article';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-article',
  imports: [ArticleComponent,NgFor],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ListArticleComponent {
  articles!:Article[];
  ngOnInit(){
    this.articles = [{ 
    
      title:"apprendre python",
      content:"python est un langage de programmation",
      slug :"apprendre python",
      auteur : "Jhon doe",
      photo :"https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
      created_at:"2021-03-10",
      nb_comments :10,
      categories :['python','Programmation']},
      { 
    
        title:"apprendre java",
        content:"java ",
        slug :"apprendre java",
        auteur : "ben mat",
        photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwah60EQxlnuGFag1TRvQAxFFBmxgjva8XLg&s",
        created_at:"2021-03-10",
        nb_comments :1,
        categories :['java','Programmation']},
        { 
    
          title:"apprendre python",
          content:"python est un langage de programmation",
          slug :"apprendre python",
          auteur : "Jack mak",
          photo :"https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
          created_at:"2021-03-10",
          nb_comments :20,
          categories :['python','Programmation']},
        ]
   ;
  }
}
