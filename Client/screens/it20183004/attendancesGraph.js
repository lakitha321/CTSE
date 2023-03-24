import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

const AttendancePieChart = ({ data }) => {
  const pieData = data.map((item) => ({
    value: item.attendance,
    label: item.month,
    key: item.month,
    svg: { fill: item.color },
  }));

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={'white'}
          textAnchor={'middle'}
          alignmentBaseline={'middle'}
          fontSize={16}
          fontWeight={'bold'}
        >
          {data.label}
        </Text>
      );
    });
  };

  return (
    <View style={{ height: 300, flexDirection: 'row' }}>
      <PieChart style={{ flex: 1 }} data={pieData}>
        <Labels />
      </PieChart>
    </View>
  );
};

export default function App() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      const response = await fetch('https://ctse-node-server.herokuapp.com/attendance/getAll');
      const data = await response.json();
      setAttendanceData(data);
    };

    fetchAttendanceData();
  }, []);

  return (
    <View style={styles.container}>
      <AttendancePieChart data={attendanceData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
