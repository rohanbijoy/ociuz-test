import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./redux/userSlice";
import { useState } from "react";
import ReactPDF from '@react-pdf/renderer';

import { Page, Text, View, Document, StyleSheet, pdf} from '@react-pdf/renderer';
function Users() {
    const [showButtons, setShowButtons] = useState(false);
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteuser/${id}`)
            .then(res => {
                dispatch(deleteUser({ id }));
            })
            .catch(err => console.log(err));
    };

    const toggleButtons = () => {
        setShowButtons(!showButtons);
    };


//pdf
const styles = StyleSheet.create({
    page: {
      display:"flex",
      backgroundColor: '#E4E4E4',
      fontSize:'10px'
    },
    section: {
      margin: 5,
      padding: 5,
      display:'flex',
      fontSize:'10px'
    }
  });
const downloadPDF = async () => {
    const blob = (
        <Document>
        <Page size="A4" style={styles.page}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <View style={styles.section}>
                <Text>Name</Text>
              </View>
              <View style={styles.section}>
                <Text>Email</Text>
              </View>
              <View style={styles.section}>
                <Text>Age</Text>
              </View>
              <View style={styles.section}>
                <Text>Phone Number</Text>
              </View>
            
              <View style={styles.section}>
                <Text>Role</Text>
              </View>
              <View style={styles.section}>
                <Text>Address</Text>
              </View>
              <View style={styles.section}>
                <Text>Location</Text>
              </View>
              <View style={styles.section}>
                <Text>Native Location</Text>
              </View>
            </div>
           
            {users.map(user => (
              <div key={user.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={styles.section}>
                  <Text>{user.name}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{user.email}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{user.age}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{user.phone}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{user.role}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{user.address}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{user.location}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{user.native}</Text>
                </View>
              </div>
            ))}
          </div>
        </Page>
      </Document>
    );

    const pdfBlob = await pdf(blob).toBlob();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'users.pdf';
   
    link.click();
  
};

 

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <button onClick={downloadPDF}>download</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td onClick={toggleButtons}>{user.name}</td>
                                {showButtons && (
                                    <td>
                                        <Link to={`/edit/${user.id}`} className="btn btn-sm btn-success me-2">Update</Link>
                                        <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
