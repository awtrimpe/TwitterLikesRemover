# Twitter Likes Remover

The purpose of this project is to remove all likes on a user's account for the purpose
of deleting unwanted content or for simply controlling what content stays tied to
a user on the internet

## Usage

To use the Twitter Likes Remover, you will need to:

- Download [TamperMonkey](https://www.tampermonkey.net/) and install it on your browser.
- Copy (or import) the contents of remover.js as a script in TamperMonkey
  - Replace "userName" in @match of line 6 to be your Twitter username
- Open your likes page and let the script run for as long as needed

Currently, this has only been tested on Google Chrome,
but you are welcome to try it on others and provide feedback.

### Notes

- Due to caching of your likes page in the browser, it may appear that the likes
  are not being removed. If this happens, be patient and give a reasonable amount of
  time for the amount of likes you may have to be "unliked"
