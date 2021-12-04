export default function Post(req, res){
    res.status(200).json({
        title : 'My First Post',
        content : 'Consequat aute veniam mollit laborum Lorem duis. Non veniam ad ut fugiat. Sunt in consequat occaecat ullamco excepteur anim laboris incididunt labore aliquip aliqua aute non dolor. Adipisicing ullamco tempor in cillum ut nulla tempor proident nostrud consequat commodo.'
    })
}