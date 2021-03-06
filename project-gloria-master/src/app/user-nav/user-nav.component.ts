import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  public ObjUser: Object[] = [];
  FlagAuth: any = false;
  public priceTotal: number = 0;
  constructor(public af: AngularFire, private router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.FlagAuth = true;
        this.af.database.list('/users/' + auth.uid, { preserveSnapshot: true })
          .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
              this.ObjUser[snapshot.key] = snapshot.val();

            });
          });
        this.getUserPending(auth.uid);
      }
    });
   }

  logout() {
    this.router.navigateByUrl('/login');
    this.af.auth.logout();
    location.reload();
   
    
  }
  ngOnInit() {
  }
    getUserPending(uid){

      this.af.database.list('/purchased/'+uid).subscribe((hola) =>{
        //clean var 
        this.priceTotal = 0;
        hola.map((m) =>{
          
            this.af.database.list('/purchased/'+uid+'/'+m.$key).subscribe((a) =>{

              a.map((c)=> {

                  if(c.price != null && c.Ispaid == false){
                  this.priceTotal += parseFloat(c.price) * c.quantity ;
                  }

            });
        })
      })
      
      });


    }
}
