import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
//Thêm connect
import { connect } from 'react-redux';
//Thêm action
import { fetchGetListUsers } from '../../redux/action/getListUsers';
import { fetchGetSingleUser } from '../../redux/action/getSingleUser';
import { fetchGetSingleUserNotFound } from '../../redux/action/getSingleUserNotFound';
import { fetchGetListResource } from '../../redux/action/getListResource';
import { fetchGetSingleResource } from '../../redux/action/getSingleResource';
import { fetchGetSingleResourceNotFound } from '../../redux/action/getSingleResourceNotFound';
import { fetchGetDelayed } from '../../redux/action/getDelayedResponse';
import { fetchPostCreate } from '../../redux/action/postCreate';
import { fetchPutUpdate } from '../../redux/action/putUpdate';
import { fetchPatchUpdate } from '../../redux/action/patchUpdate';
import { fetchDeleteDelete } from '../../redux/action/deleteDelete';
import { fetchRegisterSuccessful } from '../../redux/action/registerSuccessful';
import { fetchRegisterUnSuccessful } from '../../redux/action/registerUnSuccessful';
import { fetchPostLoginSuccessful } from '../../redux/action/postLoginSuccessful';
import { fetchPostLoginUnSuccessful } from '../../redux/action/postLoginUnSuccessful';
import Loading from '../../component/Loading';
import { Divider } from 'react-native-paper';
import { Linking } from 'react-native';
class APIScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowDataGet: false,
      isShowDataPostPutPatchDelete: false,
      userPostCreate: {
        name: 'morpheus',
        job: 'leader',
      },
      userPutUpdate: {
        name: 'Phạm Thanh Tùng',
        job: 'CNTT',
      },
      registerSuccessful: {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      },
      registerUnSuccessful: {
        email: 'sydney@fife',
      },
      postLoginSuccessful: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
      postLoginUnSuccessful: {
        email: 'peter@klaven',
      },
    };
  }
  GetListUsers = async () => {
    await this.props.fetchGetListUsers();
    this.setState({
      isShowDataGet: true,
    });
  };
  GetSingleUser = async () => {
    await this.props.fetchGetSingleUser();
    this.setState({
      isShowDataGet: true,
    });
  };
  GetSingleUserNotFound = async () => {
    await this.props.fetchGetSingleUserNotFound();
    this.setState({
      isShowDataGet: true,
    });
  };
  GetListResource = async () => {
    await this.props.fetchGetListResource();
    this.setState({
      isShowDataGet: true,
    });
  };
  GetSingleResource = async () => {
    await this.props.fetchGetSingleResource();
    this.setState({
      isShowDataGet: true,
    });
  };
  GetSingleResourceNotFound = async () => {
    await this.props.fetchGetSingleResourceNotFound();
    this.setState({
      isShowDataGet: true,
    });
  };
  PostCreate = async () => {
    await this.props.fetchPostCreate(JSON.stringify(this.state.userPostCreate));
    this.setState({
      isShowDataPostPutPatchDelete: true,
    });
  };
  PutUpdate = async () => {
    await this.props.fetchPutUpdate(JSON.stringify(this.state.userPutUpdate));
    this.setState({
      isShowDataPostPutPatchDelete: true,
    });
  };
  PatchUpdate = async () => {
    await this.props.fetchPatchUpdate(this.state.userPutUpdate);
    this.setState({
      isShowDataPostPutPatchDelete: true,
    });
  };
  DeleteDelete = async () => {
    await this.props.fetchDeleteDelete();
    this.setState({
      isShowDataPostPutPatchDelete: true,
    });
  };
  PostRegisterSuccessful = async () => {
    await this.props.fetchRegisterSuccessful(this.state.registerSuccessful);
    this.setState({
      isShowDataPostPutPatchDelete: true,
    });
  };
  PostRegisterUnSuccessful = async () => {
    await this.props.fetchRegisterUnSuccessful(this.state.registerUnSuccessful);
    this.setState({
      isShowDataPostPutPatchDelete: true,
    });
  };
  PostLoginSuccessful = async () => {
    await this.props.fetchPostLoginSuccessful(this.state.postLoginSuccessful);
    this.setState({
      isShowDataPostPutPatchDelete: true,
    });
  };
  PostLoginUnSuccessful = async () => {
    await this.props.fetchPostLoginUnSuccessful(this.state.postLoginUnSuccessful);
    this.setState({
      isShowDataPostPutPatchDelete: true,
    });
  };
  //this.props.fetchGetDelayed và this.setState là 2 hàm bất đồng bộ = > Dùng async, await để đợi lấy data xong rồi mới setState => tránh hiện tượng show lại kết quả cũ
  GetDelayedResponse = async () => {
    await this.props.fetchGetDelayed();
    this.setState({
      isShowDataGet: true,
    });
  };
  //Ẩn
  HideGetListUsers = () => {
    this.setState({
      isShowDataGet: false,
    });
  };
  HideDataPostPutPatchDelete = () => {
    this.setState({
      isShowDataPostPutPatchDelete: false,
    });
  };

  componentDidMount() {}
  render() {
    const {
      typeGet,
      typePost,
      listUsers,
      singleUser,
      loading,
      error,
      userCreate,
      loadingPost,
      errorCreate,
      statusPost,
      codePost,
      statusGet,
      codeGet,
    } = this.props;
    const beautify = require('json-beautify');
    return (
      <View style={{ paddingTop: 30, flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              this.HideGetListUsers();
            }}
          >
            <Text style={{ color: 'blue' }}>Ẩn Get</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.HideDataPostPutPatchDelete();
            }}
            style={{ marginLeft: 50 }}
          >
            <Text style={{ color: 'blue' }}>Ẩn Post Put Patch Delete</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://reqres.in/');
          }}
          style={{ marginRight: 20 }}
        >
          <Text style={{ color: 'green' }}>API link</Text>
        </TouchableOpacity>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                this.GetListUsers();
              }}
              style={{ marginRight: 20 }}
            >
              <Text style={{ color: 'blue' }}>GET LIST USERS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetSingleUser();
              }}
            >
              <Text style={{ color: 'blue' }}>GET SINGLE USER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetSingleUserNotFound();
              }}
            >
              <Text style={{ color: 'blue' }}>GET SINGLE USER NOT FOUND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetListResource();
              }}
            >
              <Text style={{ color: 'blue' }}>GET LIST &#60;RESOURCE&#62;</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetSingleResource();
              }}
            >
              <Text style={{ color: 'blue' }}>GET SINGLE &#60;RESOURCE&#62;</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetSingleResourceNotFound();
              }}
            >
              <Text style={{ color: 'blue' }}>GET SINGLE &#60;RESOURCE&#62; NOT FOUND</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostCreate();
              }}
            >
              <Text style={{ color: 'blue' }}>POST CREATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PutUpdate();
              }}
            >
              <Text style={{ color: 'blue' }}>PUT UPDATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PatchUpdate();
              }}
            >
              <Text style={{ color: 'blue' }}>PATCH UPDATE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.DeleteDelete();
              }}
            >
              <Text style={{ color: 'blue' }}>DELETE DELETE</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostRegisterSuccessful();
              }}
            >
              <Text style={{ color: 'blue' }}>POST REGISTER SUCCESSFUL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostRegisterUnSuccessful();
              }}
            >
              <Text style={{ color: 'blue' }}>POST REGISTER UNSUCCESSFUL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostLoginSuccessful();
              }}
            >
              <Text style={{ color: 'blue' }}>POST LOGIN SUCCESSFUL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostLoginUnSuccessful();
              }}
            >
              <Text style={{ color: 'blue' }}>POST LOGIN UNSUCCESSFUL</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginBottom: 20 }}
              onPress={() => {
                this.GetDelayedResponse();
              }}
            >
              <Text style={{ color: 'blue' }}>GET DELAYED RESPONSE</Text>
            </TouchableOpacity>
            {(loading || loadingPost) && <Loading />}
            <Divider />
            <View style={{ paddingTop: 20, backgroundColor: '#e1f0ff' }}>
              <Text style={{ fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }}>Kết quả</Text>
              <Text style={{ fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10 }}>
                GET: <Text style={{ color: 'green' }}>{typeGet}</Text>
              </Text>
              {this.state.isShowDataGet && statusGet && <Text style={{ color: 'black' }}>status: {statusGet}</Text>}
              <Text>
                {this.state.isShowDataGet && listUsers && listUsers.length > 0 && JSON.stringify(listUsers, null, 2)}
              </Text>
              <Text>
                {this.state.isShowDataGet &&
                  singleUser &&
                  Object.keys(singleUser).length > 0 &&
                  JSON.stringify(singleUser, null, 2)}
              </Text>
              <Text style={{ color: 'red', marginBottom: 20 }}>
                {this.state.isShowDataGet && error && JSON.stringify(error, null, 2)}
              </Text>
              {this.state.isShowDataGet && codeGet && (
                <Text style={{ color: 'red' }}>code: {JSON.stringify(codeGet, null, 2)}</Text>
              )}
              <Divider />
              <Text style={{ marginTop: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10 }}>
                Action: <Text style={{ color: 'green' }}>{typePost}</Text>
              </Text>
              {this.state.isShowDataPostPutPatchDelete && statusPost && (
                <Text style={{ color: 'black' }}>status: {statusPost}</Text>
              )}
              {userCreate && Object.keys(userCreate).length > 0 && (
                <>
                  <Text>{beautify(userCreate, null, 2, 100)}</Text>
                </>
              )}

              {this.state.isShowDataPostPutPatchDelete && errorCreate && (
                <Text style={{ color: 'red' }}>{JSON.stringify(errorCreate, null, 2)} </Text>
              )}

              {this.state.isShowDataPostPutPatchDelete && codePost && (
                <Text style={{ color: 'red' }}>code: {JSON.stringify(codePost, null, 2)}</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listUsers: state.apiGetReducer.data,
    loading: state.apiGetReducer.loading,
    error: state.apiGetReducer.error,
    singleUser: state.apiGetReducer.singleUser,
    typeGet: state.apiGetReducer.type,
    userCreate: state.postReducer.userCreate,
    errorCreate: state.postReducer.errorCreate,
    loadingPost: state.postReducer.loadingPost,
    statusPost: state.postReducer.statusPost,
    codePost: state.postReducer.codePost,
    typePost: state.postReducer.type,
    statusGet: state.apiGetReducer.status,
    codeGet: state.apiGetReducer.code,
  };
};

export default connect(mapStateToProps, {
  fetchGetListUsers,
  fetchGetSingleUser,
  fetchGetSingleUserNotFound,
  fetchGetListResource,
  fetchGetSingleResource,
  fetchGetSingleResourceNotFound,
  fetchGetDelayed,
  fetchPostCreate,
  fetchPutUpdate,
  fetchPatchUpdate,
  fetchDeleteDelete,
  fetchRegisterSuccessful,
  fetchRegisterUnSuccessful,
  fetchPostLoginSuccessful,
  fetchPostLoginUnSuccessful,
})(APIScreen);
