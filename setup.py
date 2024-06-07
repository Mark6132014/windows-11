import turtle
from time import sleep
import os
def hideQuiz():
    sleep(1)
    print(".")
def setup():
    username = input("What is your name?: ")
    if username == "":
        print("You got to type in a name!")
        print("But that is okay, you can type your name when you will get to your computer.")
        sleep(1)
        setup()
    else:
        print("Well hi, " + username + "! Type your password next:")
        sleep(1)
        password = input("Password: ")
        print("Good, all done!")
        print("Now wait for 15 seconds, and make sure you know your password.")
        i = 0
        while i < 15:
            hideQuiz()
            i += 1
            if i == 15:
                print("Let the quiz begin!")
                sleep(1)
                while True:
                    question1 = input("What is your username that you typed in?: ")
                    if question1 == username:
                        print("Good.")
                        question2 = input("What is your password that you typed in?: ")
                        if question2 == password:
                            print("Success! You are good to go!")
                            sleep(1)
                            print("Just type in https://mark6132014.github.io/windows-11/ or type in ./index.html")
                            sleep(1)
                            closeSetup = input("If you opened it or just read it, Do you want to close this setup? Y/N: ")
                            if closeSetup == "Y":
                                print("Closing...")
                                sleep(2)
                                clear = lambda: os.system("cls")
                                clear()
                                sleep(1)
                                print("It's now safe to close the dialog/console (etc.)")
                                sleep(2)
                                clear()
                            else:
                                print("That's a no, Alright...")
                            break
                        else:
                            print("Uh oh! Start all over.")
                            continue
                        break
                    else:
                        print("Uh oh! Start all over.")
                        continue
print("Hello there.")
sleep(1)
print("If you want to setup Windows 11, first, you got to type your name.")
sleep(1)
print("Setup wizard is now running...")
setup()