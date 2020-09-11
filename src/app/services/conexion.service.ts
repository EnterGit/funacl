import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

type CollentionPredicate<T> = string | AngularFirestoreCollection;
type DocumentPredicate<T> = string | AngularFirestoreDocument;

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(private afs: AngularFirestore) {

    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
    this.items = this.itemsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
   }

   listaItem(){
     return this.items;
   }

   agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }

  eliminarItem(item){
    console.log("aqui elimina" + item.id);
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

  editarItem(item){
    console.log("Edita item" + item.id);
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }


///

private col<T>(ref:CollentionPredicate<T>, queryFn?): AngularFirestoreCollection{
  return typeof ref === "string"? this.afs.collection(ref,queryFn): ref;
}

private doc<T>(ref:DocumentPredicate<T>): AngularFirestoreDocument{
  return typeof ref === "string"? this.afs.doc(ref) : ref;
}

add<T>(ref:CollentionPredicate<T>, data){
  return this.col(ref).add({
    ...data
  })
}

col$<T>(ref:CollentionPredicate<T>, queryFn?):Observable<any[]>{
  return this.col(ref,queryFn).snapshotChanges().pipe(
    map(docs => {
       return docs.map(d => {
         const data = d.payload.doc.data();
         const id = d.payload.doc.id;
         return  { id, ...data}
       })
    })
  )
}

update<T>(ref:DocumentPredicate<T>, data){
  return this.doc(ref).update({
    ...data
  })
}

delete<T>(ref:DocumentPredicate<T>){
  return this.doc(ref).delete();
}


}
