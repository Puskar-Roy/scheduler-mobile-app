import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Timeline from "react-native-timeline-flatlist";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export default function TeacherScheduleScreen() {

  const [timelineData, setTimelineData] = useState([]);
  const [currentTeacher, setCurrentTeacher] = useState("Sumit Gupta"); 
  const [currentDay, setCurrentDay] = useState("Monday"); 


  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


  const currentDayIndex = days.indexOf(currentDay);

  useEffect(() => {
   
    const scheduleData = {
      schedule: {
        Monday: {
          "2": [
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Room A",
              group: "Class 9B",
              time: "10:30 - 11:15",
            },
            {
              subject: "Physics",
              teacher: "Mr. Sharma",
              room: "Chemistry Lab",
              group: "Class 10B",
              time: "09:15 - 09:30",
            },
          ],
          "3": [
            {
              subject: "Biology",
              teacher: "Sumit Gupta",
              room: "Room B",
              group: "Class 9A",
              time: "09:30 - 10:15",
            }
          ],
          "4": [
            {
              subject: "History",
              teacher: "Ms. Kapoor",
              room: "Room A",
              group: "Class 9A",
              time: "10:15 - 10:30",
            },
            {
              subject: "Geography",
              teacher: "Dr. Patel",
              room: "Room B",
              group: "Class 10A",
              time: "11:15 - 11:30",
            },
            {
              subject: "Math",
              teacher: "Mr. Sharma",
              room: "Room B",
              group: "Class 10B",
              time: "10:15 - 10:30",
            },
          ],
          "5": [
            {
              subject: "History",
              teacher: "Ms. Kapoor",
              room: "Room A",
              group: "Class 9A",
              time: "10:30 - 11:15",
            },
            {
              subject: "Physics",
              teacher: "Mr. Sharma",
              room: "Room A",
              group: "Class 9A",
              time: "08:30 - 09:15",
            },
            {
              subject: "English",
              teacher: "Ms. Kapoor",
              room: "Room B",
              group: "Class 9A",
              time: "10:30 - 11:15",
            },
            {
              subject: "Biology",
              teacher: "Sumit Gupta",
              room: "Physics Lab",
              group: "Class 10B",
              time: "11:15 - 11:30",
            },
            {
              subject: "Geography",
              teacher: "Dr. Patel",
              room: "Room B",
              group: "Class 10B",
              time: "11:15 - 11:30",
            },
          ],
          "6": [
            {
              subject: "Biology",
              teacher: "Sumit Gupta",
              room: "Chemistry Lab",
              group: "Class 10A",
              time: "10:15 - 10:30",
            },
            {
              subject: "Biology",
              teacher: "Sumit Gupta",
              room: "Chemistry Lab",
              group: "Class 10B",
              time: "10:30 - 11:15",
            },
          ],
        },
        Tuesday: {
          "1": [
            {
              subject: "Geography",
              teacher: "Dr. Patel",
              room: "Room A",
              group: "Class 9A",
              time: "11:15 - 11:30",
            },
            {
              subject: "English",
              teacher: "Sumit Gupta",
              room: "Room A",
              group: "Class 9A",
              time: "08:30 - 09:15",
            },
            {
              subject: "Chemistry",
              teacher: "Sumit Gupta",
              room: "Physics Lab",
              group: "Class 10A",
              time: "09:30 - 10:15",
            },
            {
              subject: "Geography",
              teacher: "Dr. Patel",
              room: "Room B",
              group: "Class 10A",
              time: "08:30 - 09:15",
            },
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Physics Lab",
              group: "Class 10B",
              time: "11:15 - 11:30",
            },
          ],
          "3": [
            {
              subject: "Math",
              teacher: "Mr. Sharma",
              room: "Room A",
              group: "Class 9A",
              time: "09:30 - 10:15",
            },
            {
              subject: "Geography",
              teacher: "Mr. Kumar",
              room: "Room B",
              group: "Class 9A",
              time: "11:15 - 11:30",
            },
          ],
          "5": [
            {
              subject: "Math",
              teacher: "Mr. Sharma",
              room: "Room B",
              group: "Class 9B",
              time: "10:30 - 11:15",
            },
          ],
          "6": [
            {
              subject: "English",
              teacher: "Mr. Sharma",
              room: "Room A",
              group: "Class 9A",
              time: "10:15 - 10:30",
            },
            {
              subject: "Geography",
              teacher: "Dr. Patel",
              room: "Room B",
              group: "Class 9B",
              time: "11:15 - 11:30",
            },
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Physics Lab",
              group: "Class 10A",
              time: "08:30 - 09:15",
            },
          ],
        },
        Wednesday: {
          "1": [
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Room B",
              group: "Class 9B",
              time: "08:30 - 09:15",
            },
            {
              subject: "Biology",
              teacher: "Sumit Gupta",
              room: "Chemistry Lab",
              group: "Class 10A",
              time: "10:30 - 11:15",
            },
          ],
          "2": [
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Room B",
              group: "Class 9A",
              time: "09:30 - 10:15",
            },
            {
              subject: "Computer Science",
              teacher: "Mr. Kumar",
              room: "Room A",
              group: "Class 9A",
              time: "08:30 - 09:15",
            },
            {
              subject: "Chemistry",
              teacher: "Sumit Gupta",
              room: "Room A",
              group: "Class 9A",
              time: "09:15 - 09:30",
            },
            {
              subject: "Math",
              teacher: "Mr. Sharma",
              room: "Room A",
              group: "Class 10A",
              time: "09:30 - 10:15",
            },
          ],
          "3": [
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Chemistry Lab",
              group: "Class 10A",
              time: "09:15 - 09:30",
            },
            {
              subject: "Chemistry",
              teacher: "Sumit Gupta",
              room: "Physics Lab",
              group: "Class 10A",
              time: "09:15 - 09:30",
            },
          ],
          "4": [
            {
              subject: "Geography",
              teacher: "Mr. Kumar",
              room: "Room A",
              group: "Class 9A",
              time: "10:30 - 11:15",
            },
            {
              subject: "Geography",
              teacher: "Mr. Sharma",
              room: "Room B",
              group: "Class 9B",
              time: "09:15 - 09:30",
            },
          ],
          "5": [
            {
              subject: "English",
              teacher: "Ms. Kapoor",
              room: "Room B",
              group: "Class 9B",
              time: "11:15 - 11:30",
            },
            {
              subject: "Geography",
              teacher: "Mr. Sharma",
              room: "Room A",
              group: "Class 10B",
              time: "10:15 - 10:30",
            },
          ],
          "6": [
            {
              subject: "English",
              teacher: "Ms. Kapoor",
              room: "Room A",
              group: "Class 9A",
              time: "11:15 - 11:30",
            },
          ],
        },
        Thursday: {
          "1": [
            {
              subject: "Computer Science",
              teacher: "Mr. Kumar",
              room: "Room A",
              group: "Class 9A",
              time: "08:30 - 09:15",
            },
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Room B",
              group: "Class 9B",
              time: "11:15 - 11:30",
            },
            {
              subject: "Chemistry",
              teacher: "Sumit Gupta",
              room: "Chemistry Lab",
              group: "Class 10A",
              time: "08:30 - 09:15",
            },
          ],
          "3": [
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Room A",
              group: "Class 9A",
              time: "09:30 - 10:15",
            },
          ],
          "4": [
            {
              subject: "Geography",
              teacher: "Mr. Sharma",
              room: "Room B",
              group: "Class 9A",
              time: "10:15 - 10:30",
            },
          ],
          "5": [
            {
              subject: "Chemistry",
              teacher: "Sumit Gupta",
              room: "Room B",
              group: "Class 9A",
              time: "09:15 - 09:30",
            },
          ],
          "6": [
            {
              subject: "History",
              teacher: "Ms. Kapoor",
              room: "Room A",
              group: "Class 9A",
              time: "10:30 - 11:15",
            },
          ],
        },
        Friday: {
          "2": [
            {
              subject: "Chemistry",
              teacher: "Sumit Gupta",
              room: "Room A",
              group: "Class 9A",
              time: "09:15 - 09:30",
            },
          ],
          "3": [
            {
              subject: "English",
              teacher: "Ms. Kapoor",
              room: "Room B",
              group: "Class 9A",
              time: "09:30 - 10:15",
            },
            {
              subject: "Math",
              teacher: "Mr. Sharma",
              room: "Room A",
              group: "Class 9A",
              time: "08:30 - 09:15",
            },
          ],
          "4": [
            {
              subject: "Math",
              teacher: "Mr. Sharma",
              room: "Room B",
              group: "Class 10B",
              time: "10:30 - 11:15",
            },
          ],
          "5": [
            {
              subject: "Physics",
              teacher: "Dr. Patel",
              room: "Room B",
              group: "Class 9A",
              time: "10:15 - 10:30",
            },
            {
              subject: "Math",
              teacher: "Mr. Sharma",
              room: "Room B",
              group: "Class 9A",
              time: "08:30 - 09:15",
            },
            {
              subject: "Math",
              teacher: "Mr. Sharma",
              room: "Room B",
              group: "Class 9B",
              time: "10:15 - 10:30",
            },
          ],
          "6": [
            {
              subject: "Biology",
              teacher: "Dr. Patel",
              room: "Physics Lab",
              group: "Class 10A",
              time: "09:15 - 09:30",
            },
          ],
        },
      },
    };

    // Filter and convert schedule data for the current teacher and day
    //@ts-ignore

    const filterAndConvertSchedule = (schedule, teacher, day) => {
      //@ts-ignore

      let filteredData = [];

      // Check if the day exists in the schedule
      if (schedule[day]) {
        // Loop through periods for the current day
        Object.keys(schedule[day]).forEach((period) => {
          // Filter classes for the current teacher
          const teacherClasses = schedule[day][period].filter(
            //@ts-ignore

            (classInfo) => classInfo.teacher === teacher
          );

          //@ts-ignore
          // Add filtered classes to timeline data
          teacherClasses.forEach((classInfo) => {
            filteredData.push({
              time: classInfo.time.split(" - ")[0], // Start Time
              title: `${classInfo.subject} (${classInfo.group})`,
              description: `Room: ${classInfo.room}\nPeriod: ${period}\nTime: ${classInfo.time}`,
              period: period,
              group: classInfo.group,
              timeEnd: classInfo.time.split(" - ")[1],
            });
          });
        });
      }

      // Sort by time
      //@ts-ignore

      filteredData.sort((a, b) => {
        const timeA = a.time.split(":").map(Number);
        const timeB = b.time.split(":").map(Number);

        if (timeA[0] !== timeB[0]) {
          return timeA[0] - timeB[0]; // Compare hours
        }
        return timeA[1] - timeB[1]; // Compare minutes
      });
      //@ts-ignore

      return filteredData;
    };

    // Update timeline data when teacher or day changes
    setTimelineData(
      //@ts-ignore
      filterAndConvertSchedule(
        scheduleData.schedule,
        currentTeacher,
        currentDay
      )
    );
  }, [currentTeacher, currentDay]);

  // Navigation functions
  const goToPreviousDay = () => {
    const prevIndex =
      currentDayIndex > 0 ? currentDayIndex - 1 : days.length - 1;
    setCurrentDay(days[prevIndex]);
  };

  const goToNextDay = () => {
    const nextIndex =
      currentDayIndex < days.length - 1 ? currentDayIndex + 1 : 0;
    setCurrentDay(days[nextIndex]);
  };

  // Get class count for current day
  const classCount = timelineData.length;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text className="text-3xl font-semibold">
          {currentTeacher}'s Schedule
        </Text>
      </View>

      <View className="flex flex-row justify-between w-[90%] mt-4 mx-auto">
        <TouchableOpacity className="" onPress={goToPreviousDay}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>

        <Text className="text-2xl font-light">{currentDay}</Text>

        <TouchableOpacity onPress={goToNextDay}>
          <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View className="p-3 text-center w-full justify-center items-center flex">
        <Text style={styles.classCount}>
          {classCount} {classCount === 1 ? "class" : "classes"} scheduled
        </Text>
      </View>

      {timelineData.length > 0 ? (
        <Timeline
          data={timelineData}
          circleSize={20}
          circleColor="#3b82f6"
          lineColor="#E0E0E0"
          timeContainerStyle={styles.timeContainer}
          timeStyle={styles.timeStyle}
          titleStyle={styles.titleStyle}
          descriptionStyle={styles.descriptionStyle}
          //@ts-ignore

          options={{
            style: { paddingTop: 5 },
            showsVerticalScrollIndicator: false,
          }}
          renderDetail={(rowData, sectionID, rowID) => (
            <View style={styles.detailContainer}>
              <Text style={styles.titleStyle}>{rowData.title}</Text>
              <View style={styles.detailTextContainer}>
                <Text style={styles.descriptionStyle}>
                  {rowData.description}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <View className="h-[150px] my-auto">
          <Text style={styles.emptyText}>
            No classes scheduled for {currentTeacher} on {currentDay}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop:10,
  },
  headerContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  teacherName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  dayNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    elevation: 2,
  },
  navButton: {
    padding: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
  navButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  currentDay: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  classCountContainer: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  classCount: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
  timeContainer: {
    minWidth: 65,
    marginTop: 10,
  },
  timeStyle: {
    textAlign: "center",
    backgroundColor: "#3b82f6",
    color: "white",
    padding: 5,
    borderRadius: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  descriptionStyle: {
    color: "#666",
    fontSize: 14,
  },
  detailContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 5,
  },
  detailTextContainer: {
    flexDirection: "column",
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
