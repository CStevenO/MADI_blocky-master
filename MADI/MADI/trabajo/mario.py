from machine import DAC, Pin, PWM
import math
import time

#create melody
melody = [
330, 330, 330, 262, 330, 392, 196, 262, 196, 165, 220, 247, 233, 220, 196, 330, 392,
440, 349, 392, 330, 262, 294, 247, 262, 196, 165, 220, 247, 233, 220, 196, 330, 392,
440, 349, 392, 330, 262, 294, 247, 392, 370, 330, 311, 330, 208, 220, 262, 220, 262,
294, 392, 370, 330, 311, 330, 523, 523, 523, 392, 370, 330, 311, 330, 208, 220, 262,
220, 262, 294, 311, 294, 262, 262, 262, 262, 262, 294, 330, 262, 220, 196, 262, 262,
262, 262, 294, 330, 262, 262, 262, 262, 294, 330, 262, 220, 196]

#create duration
noteDurations = [
8,4,4,8,4,2,2,
3,3,3,4,4,8,4,8,8,8,4,8,4,3,8,8,3,
3,3,3,4,4,8,4,8,8,8,4,8,4,3,8,8,2,
8,8,8,4,4,8,8,4,8,8,3,8,8,8,4,4,4,8,2,
8,8,8,4,4,8,8,4,8,8,3,3,3,1,
8,4,4,8,4,8,4,8,2,8,4,4,8,4,1,
8,4,4,8,4,8,4,8,2
]

music=PWM(Pin(25))  #Create music object from pin25
music.duty(512)

for i in range(len(melody)):              #Calculate the number of list elements and execute loop
  noteDuration = 800/noteDurations[i]
  music.freq(melody[i]*2)
  time.sleep_ms(int(noteDuration * 1.30)) #Set the time for each tonality

music.deinit()
