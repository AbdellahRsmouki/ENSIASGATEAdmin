import '../App.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Popconfirm,Divider, Tag, Table } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import Statistics from '../components/Statistics';

import React, { Component } from 'react'


const { Header, Footer, Sider, Content } = Layout;

export default class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state = {whatToShow:0};

  }
  handleMenuClick = ( key ) => {
    // Use the key here
    // If you want to use a specific key you have to do something like:
    if (key === 'profiles') {
      console.log('profiles  is clicked');
      this.setState({whatToShow : 0});
      // alert("clicked")
    }
    if (key === 'companies') {
      console.log('companies is clicked')
      this.setState({whatToShow : 1});
    }
    if (key === 'statistiques') {
      console.log('statistics is clicked')
      this.setState({whatToShow : 2});
    }
  }

  componentDidMount(){

  }


  render(){
    const profileColumns = [
      {
        title: 'Name',
        dataIndex: 'nom',
        key: 'nom',
        render: (text, row) => <a>{text+' '+row.prenom}</a>,
      },
      {
        title: 'Promo',
        dataIndex: 'promo',
        key: 'promo',
      },
      {
        title: 'filiere',
        dataIndex: 'filiere',
        key: 'filiere',
      },
      {
        title: 'Company or University',
        dataIndex: 'entreprise_universite',
        key: 'entreprise_universite',
      },
      {
        title: 'Laureat or student',
        dataIndex: 'laureat',
        key: 'laureat',
        render :  laureat =><a>{laureat?"Laureat":"Student"}</a>
      },
      {
        title: 'Keywords',
        dataIndex: 'keywords',
        key: 'keywords',
        render: (text) => <a>{text}</a>,
        /*render : keywords => (
          <span>
            {keywords?"no keywords":keywords.split(",").map(tag => {
              tag.toLowerCase();
              let color = tag === 'engineer' ? 'geekblue' : 'green';
              if (tag === 'developper') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),*/
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Popconfirm title= "Delete is irrecoverable, are you sure you want to delete it?">
                <a title= "Delete" className= "mgl10" onClick={alert('hello')/*this.onDelete.bind(this, index)*/}>
                  <Icon type="delete"/></a>
           </Popconfirm>
           <Divider type="vertical" />
            <a onClick={alert('hello')/*this.onDelete.bind (this, index)*/} className= "mgl10" title="Update"><Icon type="update"/></a>
          </span>
        ),
      },
    ];

    const companyColumns = [
      {
        title: 'Name',
        dataIndex: 'nom',
        key: 'nom',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Speciality',
        dataIndex: 'specialite',
        key: 'specialite',
      },
      {
        title: 'Adresse',
        dataIndex: 'pays',
        key: 'pays',
        render: (text, row) => <a>{row.ville+' '+text}</a>,
      },
      {
        title: 'Featured',
        dataIndex: 'featured',
        key: 'featured',
        render: (text) => <a>{text?"True":"False"}</a>,
      },
      {
        title: 'Site Web',
        dataIndex: 'site_web',
        key: 'site_web',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Keywords',
        key: 'keywords',
        dataIndex: 'keywords',
        render: (text) => <a>{text}</a>,
        /*render: text => (
          <span>
            {text?"No Keywords":text.split(",").map(tag => {
              tag.toLowerCase();
              let color = tag === 'engineer' ? 'geekblue' : 'green';
              if (tag === 'developper') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),*/
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Update </a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];
    
    const profilesData = [
      {
        "id" : "1",
        "nom": "ahadri",
        "prenom": "hatim",
        "details": "The first profile in the app",
        "promo": "2017",
        "ville": "paris",
        "pays": "France",
        "entreprise_universite": "BNP Paris bas",
        "poste": "Full Stack Consultant ",
        "filiere": "GL",
        "featured": true,
        "laureat": true,
        "student": false,
        "e-mail": "abezdcmcolfds.sdchb@gmail.com",
        "website": "xqsjhsjdchscsd.com",
        "linkedIn": "https://www.linkedin.com/in/hatim-ahadri/",
        "image" : "https://media.licdn.com/dms/image/C4E03AQEUSJ_sSzjcIw/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=cNSoOoWK2tamtP-9HJgWK6TLgFM0bT6pqwR1pmdJc4A",
        "keywords": "data, SQL SERVER, ORACLE Database"
      },
      {
        "id" : "2",
        "nom": "ahmadoun",
        "prenom": "douae",
        "promo": "2017",
        "ville": "paris",
        "pays": "France",
        "details": "The second profile in the app",
        "entreprise_universite": "Université Paris Descartes",
        "poste": "Phd student",
        "filiere": "GL",
        "featured" : true,
        "laureat": true,
        "student": false,
        "linkedIn": "https://www.linkedin.com/in/douae-ahmadoun/",
        "image" : "https://media.licdn.com/dms/image/C4D03AQFc4oTRoPRSJA/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=TOAYqUx3Kw3FDy7sutYkK_HL5_UyohAaTzoZkUrW2Gg"
      },
      {
        "nom": "alehyen",
        "prenom": "Ismail",
        "promo": "2017",
        "ville": "Rabat",
        "pays": "Maroc",
        "entreprise_universite": "Quinten",
        "poste": "Software Engineer",
        "filiere": "GL",
        "linkedIn": "https://www.linkedin.com/in/ismail-alehyen/",
        "image": "https://media.licdn.com/dms/image/C4D03AQFcUaS629WDBw/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=LiCpPAO2aS5t7OpmtFyf2enn-aPv4buY5fDu7xeN_uI",
        "featured" : true,
        "laureat": true,
        "student": false,
        "id": "3",
        "details": "this is the third one"
      }
    ]
  
    const companiesData = [
      {
        "id" : "1",
        "nom": "Masarat App",
        "specialite": " Logiciels informatiques",
        "site_web": "http://www.masaratapp.com",
        "taille":"1-10 employés",
        "details": "Masarat App is a post-PC Company specialized in design and development of mobile applications. Beyond technology, our apps deliver high user exeprience and engaging content.",
        "fondee": "2011",
        "ville": "Temara",
        "pays": "Maroc",
        "featured" : true,
        "linkedIn": "https://www.linkedin.com/company/masarat-app/",
        "image" : "https://media.licdn.com/dms/image/C560BAQFzJlF4R8QBbQ/company-logo_400_400/0?e=1583366400&v=beta&t=cs0QXzMEv70mywQBd-KgVg1GJhrzLLgHhstK5j37goE",
        "keywords": "Mobile applications design, development Android, Innovative solutions for Education"
        },
        {
        "id" : "1",
        "nom": "Atos",
        "specialite": "Technologies et services de l’information",
        "site_web": "http://atos.net",
        "details": "Atos est un leader international de la transformation digitale avec 120 000 collaborateurs dans 73 pays et un chiffre d’affaires annuel de 13 milliards d’euros. Numéro un européen du Cloud, de la Cybersécurité et des supercalculateurs, le Groupe fournit à travers sa Digital Transformation Factory des solutions intégrées de Cloud Hybride Orchestré, Big Data, Applications Métiers et Environnement de Travail Connecté, ainsi que des services transactionnels par l’intermédiaire de Worldline, le leader européen des services de paiement. Grâce à ses technologies de pointe et son expertise marché, Atos accompagne la transformation digitale de ses clients dans tous leurs secteurs d’activités. Partenaire informatique mondial des Jeux Olympiques et Paralympiques, le Groupe exerce ses activités sous les marques Atos, Atos Syntel, Unify et Worldline. Atos est une entreprise cotée sur Euronext Paris et fait partie de l’indice CAC 40.",
        "fondee": "1997",
       "taille": "10 001 employés et plus",
        "ville": "95877 Bezons",
        "pays": "France",
        "featured" : true,
        "linkedIn": "https://www.linkedin.com/company/atos/",
        "image" : "https://media.licdn.com/dms/image/C4D0BAQG1qAv27MEydg/company-logo_400_400/0?e=1583366400&v=beta&t=Wd_Daxk6CMzHedEdCNRsBoh07y_7Lv8pFVUOQm2rGfs",
        "keywords": "Mobile applications design, Cybersécurité , Cloud"
      }
    ];
  return (
    <div className="App">
      <Layout>
      <Header style={{padding:10}}>
      <Avatar style={{float:'right'}} src='../src/logo.svg' />
      <Title style={{color:'white'}} level={3}>ENSIAS-GATE</Title>
      </Header>
        <Layout>
        <Sider>
          <Menu
          defaultSelectedKeys={['Dashboard']}
          mode="inline"
          >
            <Menu.Item key='menu'>
              Menu
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icon type="mail" />
                  <span>Update</span>
                </span>
              }
              >
                <Menu.ItemGroup key='comptes' title='Comptes'>
                  <Menu.Item key='profiles' onClick={() => this.handleMenuClick('profiles')} > Profiles</Menu.Item>
                  <Menu.Item key='companies' onClick={() => this.handleMenuClick('companies')}> Companies</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key='statistiques' onClick={() => this.handleMenuClick('statistiques')}>
              Statistiques
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>          
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
              {this.state.whatToShow === 1?
              <div>
                <Title style={{color:'Black'}} level={3}>Companies</Title>
                <Table columns={companyColumns} dataSource={companiesData} />
              </div>:(this.state.whatToShow === 0 ?
              <div>
                <Title style={{color:'Black'}} level={3}>Profiles</Title>
                <Table columns={profileColumns} dataSource={profilesData} />
              </div>:
              <div>
                <Title style={{color:'Black'}} level={3}>Statistiques</Title>
                <Statistics />
              </div>
              )}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Admin Dashboard for ENSIAS-GATE</Footer>
        </Layout>
      </Layout>    
    </Layout>
    </div>
  );
}
}
