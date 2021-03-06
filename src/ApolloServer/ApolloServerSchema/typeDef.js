const typeDefs = `
  type post{
    _id : String!,
    Title : String!,
    Body :String!,
    _UserID :String!,
    Comments : String!,
    likesCount : Int!
    Likes : like,
    author : user
  }
  type like{
    _id : String!,
    _PostId : String!,
    _RecieverId :String!,
    _SenderId :String!
  }
  type user{
    _id : String!,
    email : String!,
    name : String!,
    password : String!,
    account_Number : Int!,
    phone_no:Int!,
    identification_number:Int!,
    JWTtoken : String!,
    postDetails : [post]
  }
  type notification{
    _id : String!,
    _userID : String!,
    type : String!,
    message : String!,
    isSeen : Boolean!,
    metaData:Int,
  }
  type Query{
    posts : [post],
    localposts : [post],
    post(Title : String!) : post
    localpost(id:Int!) : post,
    users : [user],
    loginUser(email : String! ,password : String!) : user!,
    author : [user],
    postDetails : [post],
    checkNotification(_userID : String!) : [notification]!,
    allNotification(_userID : String!) : [notification]!,
    clearUnseenNotification(_userID : String!) : [notification]!
  }

  type Mutation{
    addPost(Title : String!,Body:String!,_UserID : String!) : post,
    registerUser(
      email : String! ,
      password : String!,
      name : String!,
      account_Number : Int!,
      phone_no:Int!,
      identification_number:Int!
    ) : user!,
    createLike(
      _PostId : String!,
      _RecieverId :String!,
      _SenderId :String!
    ) : like!
  }
  type Subscription{
    likeAddedSubscription : like!
  }

`;

module.exports = typeDefs;
