
alert("Welcome to the UP-DOWN-NONE game");
alert("The rule of the game is that you choose a number in your head and I guess that number by asking you questions which you have to answer with either the word UP or DOWN or NONE");
alert("Are you ready? Lets play");
alert("Choose a number between 0 and 100");
var sual, y, x;
 sual = prompt("Write the word 'DOWN' if your number is under 50. Write the word 'UP' if it is above 50. Write the word 'NONE' if it is neither of them");

 if (sual === "DOWN" || sual ==="down" || sual === "Down") {
    y = prompt("Write DOWN if your number is under 25. Write UP if it is above 25. Write NONE if it is neither of them");
    if (y === "UP" || y ==="up" || y === "Up") {
        y = prompt("Write DOWN if your number is under 37. Write UP if it is above 37. Write NONE if it is neither of them");
       if (y === "UP" || y ==="up" || y === "Up") {
        y = prompt("Write DOWN if your number is under 43. Write UP if it is above 43. Write NONE if it is neither of them");
         if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 47. Write UP if it is above 47. Write NONE if it is neither of them");
            if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 49. If it is not under 49, then write NONE."); 
              if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 48")
            }
              else {
                alert("Your number is 49")
            }
            }
            else if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write DOWN if your number is under 45. Write UP if it is above 45. Write NONE if it is neither of them");
              if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 44")
            }
              else if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 46")
            }
              else {
                alert("Your number is 45")
            }
            }
            else {
                alert("Your number is 47")
            }
         }
         else if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt ("Write DOWN if your number is under 40. Write UP if it is above 40. Write NONE if it is neither of them")
             if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write UP if your number is above 38. Write NONE if it is not")
               if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 39")
            }
               else {
                alert("Your number is 38")
            }
             }
             else if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 42. Write NONE if it is neither of them")
                if (y === "DOWN" || y ==="down" || y === "Down") {
                    alert("Your number is 41")
                }
                else {
                    alert("Your number is 42")
                }
             }
             else {
                alert("Your number is 40")
            }
         } 
         else {
            alert("Your number is 43")
        }
       }
       else if (y === "DOWN" || y ==="down" || y === "Down") {
           y = prompt ("Write DOWN if your number is under 31. Write UP if it is above 31. Write NONE if it is neither of them")
         if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write DOWN if your number is under 28. Write UP if it is above 28. Write NONE if it is neither of them")
           if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write UP if your number is above 26. Write NONE if it is not")
              if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 27")
            }
              else {
                alert("Your number is 26")
            }
           }
           else if (y === "UP" || y ==="up" || y === "Up") {
            y= prompt("Write DOWN if your number is under 30. Write NONE if it is not.")
             if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 29")
            }
             else {
                alert("Your number is 30")
            }
           }
           else {
            alert("Your number is 28")
        }
         }
         else if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write UP if your number is above 34. Write DOWN if it is under 34. Write NONE if it is neither of them")
           if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 36. Write NONE if it is not")
             if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 35")
            }
             else {
                alert("Your number is 36")
            }
           }
           else if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt ("Write UP if your number is above 32. Write NONE if it is not")
              if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 33")
            }
              else {
                alert("Your number is 32")
            }
           }
           else {
            alert("Your number is 34")
        }
         } 
         else {
            alert("Your number is 31")
        }
       } 
       else {
        alert("Your number is 37")
    }
    }

    else if (y === "DOWN" || y ==="down" || y === "Down") {
        y = prompt ("Write DOWN if your number is under 12. Write UP if it is above 12. Write NONE if it is neither of them")
       if (y === "DOWN" || y ==="down" || y === "Down") {
        y = prompt("Write DOWN if your number is under 6. Write UP if it is above 6. Write NONE if it is neither of them")
          if (y === "DOWN" || y ==="down" || y === "Down") {
            y= prompt("Write DOWN if your number is under 3. Write UP if it is above 3. Write NONE if it is neither of them")
             if (y === "DOWN" || y ==="down" || y === "Down") {
                y= prompt("Write UP if your number is above 1. Write NONE if it is not")
                if (y === "UP" || y ==="up" || y === "Up") {
                    alert("Your number is 2")
                }
                else {
                    alert("Your number is 1")
                }
             }
             else if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 5. Write NONE if it is not")
                if (y === "DOWN" || y ==="down" || y === "Down") {
                    alert("Your number is 4")
                }
                else {
                    alert("Your number is 5")
                }
             }
             else {
                alert("Your number is 3")
            }
          }
          if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 9. Write UP if it is above 9. Write NONE if it is neither of them")
             if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 11. Write NONE if it is not")
              if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 10")
            }
              else {
                alert("Your number is 11")
            }
             }
             else if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write UP if it is above 7. Write NONE if it is not")
               if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 8")
            }
               else {
                alert("Your number is 7")
            }
             }
             else {
                alert("Your number is 9")
            }
          }
          else {
            alert("Your number is 6")
        }
       }
       else if (y === "UP" || y ==="up" || y === "Up") {
        y = prompt("Write DOWN if your number is under 18. Write UP if it is above 18. Write NONE if it is neither of them")
          if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 22. Write UP if it is above 22. Write NONE if it is neither of them")
            if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 24. Write NONE if it is not")
              if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 23")
            }
              else {
                alert("Your number is 24")
            }
            }
            else if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write DOWN if your number is under 20. Write UP if it is above 20. Write NONE if it is neither of them")
              if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 19")
            }
              else if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 21")
            }
              else {
                alert("Your number is 20")
            }
            }
            else {
                alert("Your number is 22")
            }
          }
          else if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write DOWN if your number is under 15. Write UP if it is above 15. Write NONE if it is neither of them")
             if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write UP if it is above 13. Write NONE if it is not")
              if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 14")
            }
              else {
                alert("Your number is 13")
            }
             }
             else if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 45. Write NONE if it is not")
               if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 16")
            }
               else {
                alert("Your number is 17")
            }
             }
             else {
                alert("Your number is 15")
            }
          }
          else {
            alert("Your number is 18")
        }
       } 
       else {
        alert("Your number is 12")
    }
    } 

    else {
        alert("Your number is 25")
    }
 } 

 else if (sual === "UP" || sual ==="up" || sual === "Up") {
    y = prompt("Write DOWN if your number is under 75. Write UP if it is above 75. Write NONE if it is neither of them");
   
    if (y === "UP" || y ==="up" || y === "Up") {
     y = prompt("Write DOWN if your number is under 87. Write UP if it is above 87. Write NONE if it is neither of them")
     if (y === "UP" || y ==="up" || y === "Up") {
      y = prompt("Write DOWN if your number is under 93. Write UP if it is above 93. Write NONE if it is neither of them")
       if (y === "UP" || y ==="up" || y === "Up") {
        y = prompt("Write DOWN if your number is under 97. Write UP if it is above 97. Write NONE if it is neither of them")
          if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 99. Write NONE if it is not")
            if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 98")
            }
            else {
                alert("Your number is 99")
            }
          }
          else if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write DOWN if your number is under 95. Write UP if it is above 95. Write NONE if it is neither of them")
             if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 96")
            }
             else if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 94")
            }
             else {
                alert("Your number is 95")
            }
          }
          else {
            alert("Your number is 97")
        }
       }
       else if (y === "DOWN" || y ==="down" || y === "Down") {
        y = prompt("Write DOWN if your number is under 45. Write UP if it is above 90. Write NONE if it is neither of them")
           if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write UP if it is above 88. Write NONE if it is not")
              if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 89")
            }
              else {
                alert("Your number is 88")
            }
           }
           else if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 92. Write NONE if it is not")
             if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 91")
            }
             else {
                alert("Your number is 92")
            }
           }
           else {
            alert("Your number is 90")
        }
       }
       else {
        alert("Your number is 93")
    }
     }
     else if (y === "DOWN" || y ==="down" || y === "Down") {
        y = prompt("Write DOWN if your number is under 81. Write UP if it is above 81. Write NONE if it is neither of them")
          if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write DOWN if your number is under 78. Write UP if it is above 78. Write NONE if it is neither of them")
             if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write UP if it is above 76. Write NONE if it is not")
               if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 77")
            }
               else {
                alert("Your number is 76")
            }
             }
             else if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 80. Write NONE if it is not")
                if (y === "DOWN" || y ==="down" || y === "Down") {
                    alert("Your number is 79")
                }
                else {
                    alert("Your number is 80")
                }
             }
             else {
                alert("Your number is 78")
            }
          }
          else if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 84. Write UP if it is above 84. Write NONE if it is neither of them")
              if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 86. Write NONE if it is not")
            if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 85")
            }
            else {
                alert("Your number is 86")
            }
             }
              else if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write UP if it is above 82. Write NONE if it is not")
                if (y === "UP" || y ==="up" || y === "Up") {
                    alert("Your number is 83")
                }
                else {
                    alert("Your number is 82")
                }
              }
              else {
                alert("Your number is 84")
            }
          }
          else {
            alert("Your number is 81")
        }
     }
     else {
        alert("Your number is 87")
    }
    }

    else if (y === "DOWN" || y ==="down" || y === "Down") {
        y = prompt("Write DOWN if your number is under 62. Write UP if it is above 62. Write NONE if it is neither of them")

       if (y === "DOWN" || y ==="down" || y === "Down") {
        y = prompt("Write DOWN if your number is under 56. Write UP if it is above 56. Write NONE if it is neither of them")
          if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write DOWN if your number is under 53. Write UP if it is above 53. Write NONE if it is neither of them")
            if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write UP if it is above 51. Write NONE if it is not")
              if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 52")
            }
              else {
                alert("Your number is 51")
            }
            }
            else if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 55. Write NONE if it is not")
              if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 54")
            }
              else {
                alert("Your number is 55")
            }
            }
            else {
                alert("Your number is 53")
            }
          }
          else if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 59. Write UP if it is above 59. Write NONE if it is neither of them")
             if (y === "UP" || y ==="up" || y === "Up") {
                y = prompt("Write DOWN if your number is under 61. Write NONE if it is not")
               if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 60")
            }
               else {
                alert("Your number is 61")
            }
             }
             else if (y === "DOWN" || y ==="down" || y === "Down") {
                y = prompt("Write UP if it is above 57. Write NONE if it is not")
               if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 58")
            }
               else {
                alert("Your number is 57")
            }
             }
             else {
                alert("Your number is 59")
            }
          }
          else {
            alert("Your number is 56")
        }
       }
       else if (y === "UP" || y ==="up" || y === "Up") {
        y = prompt("Write DOWN if your number is under 68. Write UP if it is above 68. Write NONE if it is neither of them")
         if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 72. Write UP if it is above 72. Write NONE if it is neither of them")
           if (y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 74. Write NONE if it is not")
             if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 73")
            }
             else {
                alert("Your number is 7DOWN4")
            }
           }
           else if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write DOWN if your number is under 70. Write UP if it is above 70. Write NONE if it is neither of them")
              if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 69")
            }
              else if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 71")
            }
              else {
                alert("Your number is 70")
            }
           }
           else {
            alert("Your number is 72")
        }
         }
         else if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write DOWN if your number is under 65. Write UP if it is above 65. Write NONE if it is neither of them")
           if (y === "DOWN" || y ==="down" || y === "Down") {
            y = prompt("Write UP if it is above 63. Write NONE if it is not")
             if (y === "UP" || y ==="up" || y === "Up") {
                alert("Your number is 64")
            }
             else {
                alert("Your number is 63")
            }
           }
           else if ( y === "UP" || y ==="up" || y === "Up") {
            y = prompt("Write DOWN if your number is under 67. Write NONE if it is not")
              if (y === "DOWN" || y ==="down" || y === "Down") {
                alert("Your number is 66")
              }
              else {
                alert("Your number is 67")
              } }
            else {
            alert("Your number is 65")
           } }
         else {
            alert("Your number is 68")
        } 
       } 
       else {
        alert("Your number is 62")
    }
    } 
    else {
          alert("Your number is 75")
    }

 } else {
      alert("Your number is 50")
 }
