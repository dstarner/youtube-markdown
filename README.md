# Youtube to Markdown Converter

This neat little file allows you to add youtube videos to markdown posts.

In your markdown file, simply declare an image like you normally would, with the link pointing to your youtube video - make sure to remove any *GET* parameters from the URL - and set the **alt** attribute text to contain `youtube_video`. Just include this javascript file on the HTML page that represents your markdown, and the image will be switched out for your Youtube video. 

I use this to place Youtube videos on my Markdown blog.

Example:

```markdown

## Watch My Video
So I put a lot of time and effort into this awesome video, please watch it.

![youtube_video][1]

[1]: https://www.youtube.com/watch?v=hqZLzjNeeVk

```
