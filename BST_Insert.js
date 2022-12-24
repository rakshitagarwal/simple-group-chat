class Node{
    constructor(value){
        this.value=value;
        this.right=right;
        this.left=left;
    }
}

class BST{
    constructor(){
   this.root=null;
    }
    Insert(value){
        var newNode=new Node(value);
  if(this.root==null){
      this.root=newNode;
      return this;
  }
  var current=this.root;
  while(true){
if(value==current.value) return undefined;
if(value<current.value){
    if(current.left==null){
        current.left=newNode;
        return this;
    }
    current=current.left;
}else{
    if(current.right==null){
        current.right=newNode;
        return this;
    }
    current=current.right;


  }
}
}
conatins(value){
    if(this.root==null) return false;
    var current=this.root;
    var found=false;
    while(current && !found){
        if(value<current.value){
            current=current.left;
        }else if(value>current.value){
             current=current.right;
        }else{ found=true;
            return true;
        }
    }
    return

}

}

















var tree=new BST();
tree.Insert(50);
tree.Insert(5);
tree.Insert(10);
tree.Insert(30);
tree.Insert(8);
tree.Insert(2);
tree.Insert(100);
tree.Insert(1);
tree.Insert(120);



console.log(tree);


