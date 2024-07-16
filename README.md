# Music-Trends
Project 3
Our project was to find America's favorite music for 2023
below we have each of our group members and what they contributed to our project

Hannah McPherson (Data Collection)
   
    I decided to go with Billboard data since they are considered a reliable, unbiased source.
All billboard data insights are compiled by; Nielsen SoundScan, MRC Data, Music Connect, and Luminate.
This allows Billboard to have a wide range of data including digital and physical sales, streams, and radio plays.
    Billboard's full analytics are behind a paywall, but I was able to find the data archived on wikipedia. As listed below:
https://www.billboard.com/music/chart-beat/2023-us-year-end-music-report-luminate-top-album-morgan-wallen-taylor-swift-1235579214/ 
https://en.wikipedia.org/wiki/Billboard_Year-End_Hot_100_singles_of_2023
https://en.wikipedia.org/wiki/List_of_Billboard_Hot_100_number_ones_of_2023
https://en.wikipedia.org/wiki/List_of_Billboard_Hot_100_top-ten_singles_in_2023
https://en.wikipedia.org/wiki/List_of_Billboard_200_number-one_albums_of_2023

    I started a web scraping program, but quickly abandoned that because when I tried to run the partial code, my laptop overheated.
After trying again and having the same result, I decided to save my computer and manually format the data into Excel files.
After formatting and editing I exported the files as CSVs and pushed them to our git repository.

    While my team members were working with the data, I put together a skeleton presentation for us to drag and drop our findings in. 
I was also responsible for our ethics considerations, which are as follows:
While Billboard is considered a reputable source for chart data, It should all be taken with a grain of salt.
Music is a very lucrative business and many people have come up with ways to manipulate chart data in their favor.
For example, you may have noticed that songs have been getting shorter.
This is due to the emergence of streaming and the number of streams a song gets contributes to its chart rank.
Shorter songs get more replays, which has made artists gravitate toward songs closer to 2:30 minutes.
    Less ethical ways charts are manipulated include;
bulk buying where fans or an artist’s company bulk buy an album or track to artificially boost sales data,
streaming fraud where a bot is programed to replay a song
(or fans put together ‘streaming parties’ that have a song playing on repeat over multiple devices)
in order to artificially boost streaming data,
or even paying for the number one spot on a chart.


Nicole Cambron
Database creation
Cleaned up CSV’s, created a SQL database and 7 tables that corresponded with the data


Yalena M Murillo (Jupyter notebook and panda frames)
 I was responsible for creating data frames that would analyze the given CSV files to identify the most popular artist, track, and album based on ranking, units sold, and streams.  In order to determine who were the top 10 artists that year, I sorted a data frame based on their ranks in the singles charts that year. To determine which track is the most popular, I sorted and displayed artists by units sold and tracks by streams. For albums, I sorted by units to find the most popular album. To solidify the first data frame generated based on the CSV file from Billboard I created another data frame that would identify the overall most popular artist by extracting and combining data from different data frames (df_TT_singles, df_TT_streamed, and df_TT_Albums) to find the most frequently occurring artist across these datasets. 

Emilie Scanlon ( interaction map)
I imported the CSV Files with the data for Top 10 Album Units sold, Top 10 Singles Units sold, and the Top 10 songs streamed. I then made a Dropdown for the user to toggle between the 3 different data displays. Each display has a chart listing the data, along with a bar graph visualization in Descending  order of Units/Streams

Julia Saavedra (visualizations): 
I created 3 visualizations:
Read in two of the csv files for my visualizations: the top 10 albums and chart toppers 
 one bar graph of the times had an number one song (weekly) with the x-axis being artist and the y-axis being # of times. 
Two donut charts: comparing Morgan Wallen and Taylor Swift album sales
One includes ALL of Taylor’s albums
The second one excludes Taylor’s rereleased music
Important to note that these visualizations were made with altair (a new library)