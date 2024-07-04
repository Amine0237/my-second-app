import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users: any;
  url = "https://api.github.com/users";
  isLoading = false;

  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get(this.url).subscribe(res => {
      
      this.isLoading = true;
      
      setTimeout(()=>{
        this.users = res;
        this.isLoading = false
      }, 3000);
      console.log(res);
    }, error => {
      console.log(error);
    }, () => {
      console.log('completed');
    });
    
  }
  
  goToGithub(url:string){
    window.open(url, '_blank');
  }
  
  
}
