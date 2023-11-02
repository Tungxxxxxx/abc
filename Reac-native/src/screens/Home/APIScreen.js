import React from 'react';
import { TouchableOpacity, View, ScrollView } from 'react-native';
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
import { TextNormal } from '../../component/TextCustom';
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
            <TextNormal style={{ color: 'blue' }}>Ẩn Get</TextNormal>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.HideDataPostPutPatchDelete();
            }}
            style={{ marginLeft: 50 }}
          >
            <TextNormal style={{ color: 'blue' }}>Ẩn Post Put Patch Delete</TextNormal>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL('https://reqres.in/');
          }}
          style={{ marginRight: 20 }}
        >
          <TextNormal style={{ color: 'green' }}>API link</TextNormal>
        </TouchableOpacity>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                this.GetListUsers();
              }}
              style={{ marginRight: 20 }}
            >
              <TextNormal style={{ color: 'blue' }}>GET LIST USERS</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetSingleUser();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>GET SINGLE USER</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetSingleUserNotFound();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>GET SINGLE USER NOT FOUND</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetListResource();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>GET LIST &#60;RESOURCE&#62;</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetSingleResource();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>GET SINGLE &#60;RESOURCE&#62;</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.GetSingleResourceNotFound();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>GET SINGLE &#60;RESOURCE&#62; NOT FOUND</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostCreate();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>POST CREATE</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PutUpdate();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>PUT UPDATE</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PatchUpdate();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>PATCH UPDATE</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.DeleteDelete();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>DELETE DELETE</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostRegisterSuccessful();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>POST REGISTER SUCCESSFUL</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostRegisterUnSuccessful();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>POST REGISTER UNSUCCESSFUL</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostLoginSuccessful();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>POST LOGIN SUCCESSFUL</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.PostLoginUnSuccessful();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>POST LOGIN UNSUCCESSFUL</TextNormal>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginBottom: 20 }}
              onPress={() => {
                this.GetDelayedResponse();
              }}
            >
              <TextNormal style={{ color: 'blue' }}>GET DELAYED RESPONSE</TextNormal>
            </TouchableOpacity>
            {(loading || loadingPost) && <Loading />}
            <Divider />
            <View style={{ paddingTop: 20, backgroundColor: '#e1f0ff' }}>
              <TextNormal style={{ fontWeight: 'bold', alignSelf: 'center', marginBottom: 10 }}>Kết quả</TextNormal>
              <TextNormal style={{ fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10 }}>
                GET: <TextNormal style={{ color: 'green' }}>{typeGet}</TextNormal>
              </TextNormal>
              {this.state.isShowDataGet && statusGet && (
                <TextNormal style={{ color: 'black' }}>status: {statusGet}</TextNormal>
              )}
              <TextNormal>
                {this.state.isShowDataGet && listUsers && listUsers.length > 0 && JSON.stringify(listUsers, null, 2)}
              </TextNormal>
              <TextNormal>
                {this.state.isShowDataGet &&
                  singleUser &&
                  Object.keys(singleUser).length > 0 &&
                  JSON.stringify(singleUser, null, 2)}
              </TextNormal>
              <TextNormal style={{ color: 'red', marginBottom: 20 }}>
                {this.state.isShowDataGet && error && JSON.stringify(error, null, 2)}
              </TextNormal>
              {this.state.isShowDataGet && codeGet && (
                <TextNormal style={{ color: 'red' }}>code: {JSON.stringify(codeGet, null, 2)}</TextNormal>
              )}
              <Divider />
              <TextNormal style={{ marginTop: 20, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 10 }}>
                Action: <TextNormal style={{ color: 'green' }}>{typePost}</TextNormal>
              </TextNormal>
              {this.state.isShowDataPostPutPatchDelete && statusPost && (
                <TextNormal style={{ color: 'black' }}>status: {statusPost}</TextNormal>
              )}
              {userCreate && Object.keys(userCreate).length > 0 && (
                <>
                  <TextNormal>{beautify(userCreate, null, 2, 100)}</TextNormal>
                </>
              )}

              {this.state.isShowDataPostPutPatchDelete && errorCreate && (
                <TextNormal style={{ color: 'red' }}>{JSON.stringify(errorCreate, null, 2)} </TextNormal>
              )}

              {this.state.isShowDataPostPutPatchDelete && codePost && (
                <TextNormal style={{ color: 'red' }}>code: {JSON.stringify(codePost, null, 2)}</TextNormal>
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
