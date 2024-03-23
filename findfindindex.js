const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
function findUserByUsername(arr,key)    {
    return arr.find(function(val)  {
        return val["username"] === key
    })
}
function removeUser(arr,key)    {
    let removedUser = arr.find(function(val)  {
    return (val["username"] === key)
    })
    let removedUserIndex = arr.indexOf(removedUser)
    arr.splice(removedUserIndex,(removedUserIndex))
    return removedUser

}
