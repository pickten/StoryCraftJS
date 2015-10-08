# StoryCraftJS
A JS port of StoryCraft, as found
[here.](https://www.reddit.com/r/writing/comments/3mhd3s/storycraft_a_simple_story_writing_software_ive/)

**Note:** While this is entirely my code (not counting libraries, etc., which are either loaded from another site
or are in a subfolder), 
the core is not my idea, specifically features 1-9. They are from the original Storycraft, which this is an attempt to
both port and possibly expand on.
However, features 10 and on are my ideas.

## Features

1. Editing (80%)
2. Saving (30%)
3. Loading (50%)
4. Downloading (0%)
5. Uploading (0%)
6. Story Explorer (0%)
7. Notes (15%)
8. Note viewer (20%)
9. Anchors/note "activeness" (1%)
10. Custom Anchors (10%)
11. Possible gist-saving (and loading? No idea how to automatically use gist) (0%)
12. | as the opposite of = (5%)

## Changelog:

### 10/7/15: I made a decision (v0.4)
- Tiny update today (yesterday, technically -- whatever)
- I got a tentative css to differentiate active/passive/open notes.

### 10/6/15: Avoiding ALL the decisions (v0.3)
- Getting back into it still.
- Notes are getting along pretty well now
- There's a note-sidebar generator, even.
- Not looking forwards to more general nav/docs

### 10/5/15: Back to work.
- Was sick. I'm better now, but nothing happened over the weekend.
- Some work got done today with notes.

### 10/1/15: Parsing work (v0.2)
- Not as much work done today as I'd like.
- As expected, no time yesterday.
- Found a function to handle finding the position, so that getAnchors can do its job
- Also got presentNotes for saving/loading. This will be borkon because people might put --//-- in their notes. I'll
probably get some sort of fix for this.
- May do some more work later today. --
- Added some work for computing anchors at various points.

### 9/29/15: Improvements (v0.1)
- Some work was done, you can now see my features list with completion stats.
- Yes, this is 9/30. Whatever. Too busy today to do much anyways.

### 9/28/15: Initial commit (v0.0)

- (3:30) It exists? I guess? More later.
- (4:30) Was away a bit, now html sort of has the core, and there's a bit of css.
- (5:40) Yay I added some localstorage and cookies stuff, because don't we all want simpler saving stuff?
- (note) I'll get gist saving at some point if I can figure out how to and how to make it more seamlessly work.
- (10:30) I've learned I code terribly when tired, so I'm just commenting and writing trivial funcs.
