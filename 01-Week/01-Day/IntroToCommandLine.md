#WDI 1.1 Morning - Your Terminal:  Interacting with your computer via text.


### Learning Objectives

Navigate the terminal and have an understanding of the tools available in it.

| **Section**      | **Timing** | **Summary**                                                             |
|------------------|------------|-------------------------------------------------------------------------|        |
| Opening          | 10 mins    | Introduce "interaction with computer"                                   |
| I Do             | 10 mins    | Simple terminal commands                                                |
| We Do            | 10 mins    | Keyboard shortcuts                                                      |
| We Do            | 10 mins    | Navigating directories                                                  |
| I Do             | 5 mins     | Creating, removing files and folders                                    |
| We Do            | 10 mins    | Making files and folders                                                |
| YOU DO 1/ASSESS   | 15 mins    | Create file/folder structure for personal course repo                   |
| I Do             | 10 mins    | Moving and copying files with ```mv``` and  ```cp```                    |
| YOU DO 2/ ASSESS  | 15 mins    | Create collection of files, directories to manage Spice Girls' lyrics   |
| I Do              | 15 mins    | Echo/Redirection and Piping |
| Closure          | 10 mins    |         ...                                                                |

<br><hr>
## Morning Lesson - 1 hour 15 min
###Connection to Long Term Learning Goals

Developers use a text-based interaction with computers.  At times, using a mouse may not even be an option.  Using a text based interaction is not only required for development but often, far more efficient once the developer becomes familiar with the terminal.

<br><hr>

_____________________________________________________________________


######Instructional Note:  “Fist to Five” Check for Understanding
A “Fist to Five” is a fast technique of checking for understanding.  It does NOT replace the students actually DOING something to demonstrate understanding, but mid-lecture, it can be used to check the “temperature” of the room, i.e. “are you following”.  Here is an example of how it works
Instructor says “First to Five on using Keyboard Shortcuts”
Students put their hands up, displaying their comfort on the topic.

- 5 fingers means 100% understanding & comfortable
- 0 fingers means 0% understanding & comfortable

Use this technique when you believe the room is about a 4.  The technique helps you verify your belief.  When introducing this to a new class, acknowledge that while this might feel silly, it provides the instructional team very valuable data about how the students are feeling. Also, encourage every single student to participate every time you do the activity and thank students who give you the feedback - if a few students don’t participate, that can snowball and the class can lose belief in the value of the activity. 


___________________________________________________________________________________

        
##Opening: Role and Importance of the Terminal  - 10 minutes
###BACKGROUND
<br>
Web programmers have to live on the command line. It gives us fast, reliable, and automatable control over computers. Web servers usually don't have graphical interfaces, so we need to interact with them through command line and programmatic interfaces. Once you become comfortable using the command line, staying on the keyboard will also help you keep an uninterrupted flow of work going without the disruption of shifting to the mouse.

Regarding scripts which you may find on the web while searching for solutions, assume they are going to do something bad

Important Note: *** You should not copy / paste scripts from web pages and run them in your terminal until you have read them and understand what they do, bad things can happen, particularly with sudo and su commands 
***

*Introduce* Computer Interfaces;
<br>
*Provide context* for “interaction” with a computer describe the following real-world examples:

  - Stone age: Punch Cards - no computer screen at all``
  - 60s-80s: Terminal/ Command Line
    - This is how everybody interacted with the computer!
  - 80s-present: Graphical User Interface (GUI)
  - 90s-present: Web Browsers

<br>

**Question**: Why do you think web developers use the terminal?

**Student Answers**: 

- it is easier for us to make and modify tools for ourselves if we don't have to provide a GUI
- using the mouse in general takes time, we can be more efficient
- you can do powerful things on the command line that you can't do in a GUI (which you will learn about later on in this course)



##I Do: Demo - 10 minutes

####Directions to studens:
Close laptops for instructor demo.

####Directions
Display your terminal on half your screen and the finder window on the other half

Perform several tasks that demonstrates a terminal command changing something in the finder window
    
    For example:
    
        - touch happy.txt
        - mkdir happyBox
        - mv happy.txt happyBox/
        - cp happyBox/happy.txt kindaHappy.txt
        - mv kindaHappy.txt  problems.txt
        - rm problems.txt
        
Students do not always see the connection between their familiar GUI interaction with their machine and the text based interaction.  We want to see the text interaction change something they are familiar with, i.e. the GUI representation.



####CFU:  
Fist to Five:  “We interact with files and directories in multiple ways”


####CFU:  
**Question:** Change directories into the happyBox directory we just created.  Identify the syntax to create an unhappy text file, create an unhappyBox directory, and move the unhappy file into the appropriate directory. 

**Student Answer**:  ```touch happy.txt```  ```mkdir unhappyBox``` ```mv unhappy.txt unhappyBox/```



##We Do:  Keyboard Shortcuts, Open and close your terminal - 5 min



####Directions to students: 
  1. ```cmd-space``` and type "terminal" to open up your terminal
  3. type ```exit``` and hit enter to exit out of this terminal session
  4. ```cmd-w``` to close this window
  5. ```cmd-n``` a couple of times to open some more terminal windows
  5. ```cmd-q``` to close the whole terminal app

**Question**: Do we always need to type exit?

**Student Answer**: 

  - It's good habit but often unnecessary.
  - It's like "ejecting" a flash drive before yanking it out of your computer
  - Instructor:  The point here is to explain WHY the exit command exists… even if we rarely use it.

##We Do:  Knowing Where You Are - 10 min

<br>
*Point out* that if we were IN finder: 

  1. we should know what directory we are in
  2. we should see what files and directories are in that current directory

**Question**: How do we do this in the terminal?  

**Student Answer**:

  1. typing ```pwd``` and hitting enter is like asking the computer "where am I?"
    - directory structures are laid out like ```directory/subdirectory/subdirectory```
  2. typing ```ls``` and hitting enter is like asking the computer the question  "what stuff is in this directory?"

####Directions to students: 
Lets open up a terminal and ```pwd```, ```ls```

####Directions
*Describe* how ```pwd``` and ```ls``` are “commands”

- To “execute” a command we type the command and hit enter
- From this point on, instead of describing a command by saying “typing [command] and hitting enter”, simply describe the command itself.  
    - For example, “pwd” asks for the current working directory.”

    
####File permissions
The column on the left e.g.: -rwxr-xr-x displays the files' permissions. That is whether or not you can read, write or execute the file The display also includes the type of file d for directory, l for link, - for files

Here's a tutorial on file permissions, if you're interested in unpacking that column: **http://en.flossmanuals.net/command-line/permissions/**

**Question:** How do we navigate directories?

**Student Answer: **

  1.  ```cd``` by itself… takes you to your home directory
    - **Instructor**: This is your user directory where all your personal files are
    - **Instructor**: If there are multiple users on your computer they would all have their own home directories
  2. ```cd directory``` moves our current location to the directory
  3. ```cd ..``` moves our current location to the parent directory (what is one directory “up”?)
  4. ```cd ../..``` moves our current location two directories “up”



##You Do:  Knowing where you are, explore your home directory - 5 min

####Directions to students:

- Use the ```cd``` command to go to your home folder.
**Question**: “What do you see?”
- Use the ```ls``` command see what is in your home directory.      **Question**: “What do you see?  Choose a directory.”
- Use the ```cd [directory]``` command to go into any folder that you spot.  
In the above command, replace  [directory] with the directory name you intend to move to.
- Use the ```ls``` command to see what files and directories exist there.
- Use the ```cd``` command to go to your home folder.


##I Do:  Making directories and files - 5 min

**Question**: What if we want to create files and folders?

  - ```mkdir directoryName``` creates a new directory with the name “directoryName”
  - ```mkdir myProject``` creates a new directory with the name “myProject”
This new directory will be created within the current parent directory.
For example, within your home directory, if I type “mkdir NewDirectory”, you’ll notice a new directory named NewDirectory in your home directory.   
- ```touch fileName``` creates a new file with the name “fileName”
- ```touch myFile``` creates a new file with the name “myFile”
- This new file will be created within the current parent directory.


**Question**: What if we want to remove files and folders? 
    
  -  Setup:  ```touch junkFile```   ```mkdir junkDirectory``` ```touch junkDirectory/innerJunkFile```  ```ls```
  - ```rm fileName``` removes the file “filename”   
  - ```rm -r junkDirectory``` removes the file “innerJunkFile” and the directory junkDirectory


```mkdir``` ```rm``` and ```touch``` can be used to create more than one file/directory at the same time. 

- ```mkdir directory01 directory02 directory03```
- ```touch file01 file02 file03```
- ```rm file01 file03```



## We Do: Making files and folders - 10 min

####Directions to students:

  1. ```mkdir films``` to make a directory
  2. ```cd films``` to go into that directory
  3. ```ls``` to see where you are
    - directory is empty, nothing there
  4. ```touch casablanca``` to make a file
  5. ```atom casablanca``` to open that file
    - add some text just to try it out, for example the text ‘Hello File!!’
    - mac text shortcuts are on the cheatsheet
  6. ```touch jaws titanic twilight``` to make more movies!
  7. ```atom .``` to open the whole directory
    - add some text to the other files
  8. Close atom, make sure everything is saved
  9. ```rm casablanca jaws``` to remove a couple movies

**Tip:** You can use the up and down arrows to go through your command history



## You Do: Create the folder structure weekly/daily, wXX/dXX - 15 min


####Directions to students: 
We are going to be working on a lot of projects throughout this course. It would be good if we had folders for each day.

  - Create 12 folders for each week of the course. (e.g. ```w01```, ```w02```, etc.)
  - In each week folder, create 5 day folders (e.g. ```d01```, ```d02```, etc.)
  - **Hint:** You can use the up arrow to repeat any commands that you executed before



#### CFU: What is a solution with minimal amount of typing?  

```
mkdir w01 w02 w03 w04 w05 w06 w07 w08 w09 w10 w11 w12
cd w01
mkdir d01 d02 d03 d04 d05
cd ../w02
```

## I Do:  Moving and Copying files (```mv``` and ```cp```)
**Question**: What if we wanted to move the folder "movies" into todays week and day folder

```
cd
mv movies w01/d01/movies
```

*Explain* how you can give ```folder/subfolder/file``` paths to ```mkdir```, ```touch```, ```cd``` etc.

**Question**: How would we copy a folder?

 - ```cp file new-file``` create a copy of the “file” and calls it “new-file”
 - ```cp -r directory new-directory``` create a copy of the entire “directory” and calls it “ new-directory”
- The ```-r``` means “recursive” which just means copy each file and directory within






##You Do: Spice Girls Exercise - 10 minutes
####Directions to students: 
While building web application, we seek to efficiently organizing/modify our files and directories.  Using your terminal to navigate and modify files will become second nature.  We need to practice!  Let’s spice up our life with a collection of files and directories for managing the Spice Girls’ lyrics.  

 1. make a directory ```spice_girls``` to hold spice girls albums and songs
 2. in ```spice_girls``` make the directories ```spice``` ```spiceworld``` ```forever```
 3. put the lyrics to "wannabe" and "denying" into their respective album folders
 4. in the ```spice_girls``` folder make the directory ```greatest_hits```
  - Hint: make sure you aren't in one of the album folders already when you make ```greatest_hits```



####CFU: 
 1. Should have created: ```spice/wannabe```, ```spiceworld/denying```, ```greatest_hits/wannabe```
 2. **Bonus**: What would have been a solution with minimal typing?

## You Do: Removing the Spice Girls - 5 minutes

####Directions to students: 
 ** Hint:** You can use your [terminal cheatsheet](../cheat_sheets/terminal.md) for copying and removing folders
 
  1. make a copy of the whole directory ```spice_girls``` into ```spice_girls_backup```
  2. remove the folder ```spice_girls_backup```

####CFU: 
What commands did you use to remove the spice girls?

```
  cp -R spice_girls spice_girls_backup
  rm -rf spice_girls
```

##I DO: Echos and Redirection
**Try This**

echo "This bookshelf flexes under the weight of the books it holds."

echo is a command that just echoes (outputs) what we give to it as arguments (same as operands). Now we want to put that line in a file called bookshelf.txt.

**Try This**

echo "This bookshelf flexes under the weight of the books it holds" > bookshelf.txt

Using the closing angle bracket > in this way is called redirection. Every command that we run in the shell has an input, an output, an error output, and arguments/operands. We are saying: "Run echo with this string as an operand, and take the output and put it in a new file called bookshelf." Try running ls again, and cat our new file.

Two angle brackets >> appends the string to the end of the file:

**Try This**

echo "It does not break, it does its job admirably" >> bookshelf.txt

**Try** cat bookshelf.txt to see the result

Adapted from **http://en.flossmanuals.net/command-line/piping/**

##I Do: Piping

Let's look back at our books. Read out the file. Notice that the list of books is unsorted! We need to organize this using the sort command.

Try cat books.txt, and cat books.txt | sort. 

The character | is called the pipe. We take the output from cat books.txt and send it through a pipe to sort. The output of cat books.txt becomes the input of sort. Now send the output of sort to a file:

**Try This**

cat books.txt | sort

**Try This**

cat books.txt | sort > sorted_books.txt

Look around again to see how the room has changed.

There are dozens of powerful tools we can leverage using pipes. One of the ones you'll be using the most is grep.

**Try This**

cat books.txt | grep Mil

See how we filtered out just the lines that contain Mil? Try grepping for something else.




##You Do/Lab: Create a folder structure using your favorite movies, actors, and music - 30 min

####Directions to Students: 

##### Books
  1. in today's folder, create a folder called "books"
  - create a folder in books named after your favorite author (e.g. "MarkTwain", or "R.L.Stine", but avoid spaces!)
  - create files named after some of the author's books in the author's folder
  - open the books folder in atom
  - edit each file to put a brief description of the book

##### Movies

  1. in today's folder, create a folder called "movies"
    - for the rest of this exercise stay in the movies folder
  2. create a folder in movies named after your favorite actor
  3. create a folder in the actor folder named after the actor's breakthrough movie
  4. create a text file named after the actor's character in the breakthrough movie in the top level "movie" directory
  5. move the text file to the breakthrough movie's folder

##### Disco etc.
  1. in today's folder, create a folder called "music"
  2. create a folder called "Disco"
  3. create a text file in "Disco" called "YMCA"
  4. delete the "Disco" folder
  5. create a folder called "Creed"
  6. delete the "Creed" folder
  7. create folders called "Gloria_Jones", "Soft_Cell", and "Rihanna"
  8. create a text file in "Gloria Jones" called "Tainted_Love.txt"
  9. copy "Tainted_Love.txt" into "Soft_Cell" and "Rihanna"

##### Cleanup
  1. in today's folder, create a folder called "Media"
  2. move "books", "movies", and "music" into the "Media" folder

___________________________________________________________________________________
**Morning Closure**


