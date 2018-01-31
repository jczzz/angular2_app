import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../services/shared.service";
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

    id_movie: string = "";
    mv_Title: string = "";
    mv_Rated: string = "";
    mv_Released: number;
    mv_Poster: string = "https://image.tmdb.org/t/p/w500";
    mv_Genre: string = "";
    mv_Plot: string = "";
    //调用服务来获取数据
    constructor(private _sharedService: SharedService) {
    }
 
    ngOnInit() {
    }
    //调用服务类的方法
    callMovieService() { 
        this._sharedService.findMovie(this.id_movie)
            .subscribe(
                //findMovie 返回的数据
            lstresult => { 
                //通过Postman查询返回的JSON数据结构，然后访问内部数据
                this.mv_Title = lstresult.results[0].original_title;
                this.mv_Rated = lstresult.results[0].vote_average;
 
                this.mv_Released = lstresult.results[0].release_data;
                this.mv_Poster+= lstresult.results[0].poster_path;
                this.mv_Genre = lstresult.results[0].genre_ids;
                this.mv_Plot = lstresult.results[0].overview;
                console.log(this.mv_Poster);
            },
            error => {
                console.log("Error. The findMovie result JSON value is as follows:");
                console.log(error);
            }
            ); 
    }
}
