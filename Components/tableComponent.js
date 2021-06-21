import React from 'react';

import { kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode, SortDirection } from 'ka-table/enums';
import { IHeadCellProps } from 'ka-table/props';

import '../selection_style.css';

const HeadCell = ({
  column: { title },
}) => {
  return (
    <div style={{
        textAlign: 'left',
        font: '12px "Century Gothic", Futura, sans-serif',
        fontWeight: 'bold',
        color: 'white'
      }}>
      {title}
    </div>
  );
};

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { tableProps:this.fetchData() };
    this.dispatch = this.dispatch.bind(this);
  }

  fetchData(){
    const tableStyle = {
      font: '12px "Century Gothic", Futura, sans-serif',
      textAlign: 'left',
      color: 'white',
      paddingBottom: '10px',
      width: 70, 
      minWidth: 50,
      border: '50px',
      borderColor: 'white'
    };

    let cols=[];
    for (var i = 0; i < this.props.columns_keys.length; i++) {
      let type=null;
      switch(this.props.columns_types[i]){
        case 'string':
          type=DataType.String;
        case 'number':
          type=DataType.Number;
        default:
          type=DataType.String;
      }
      if (this.props.columns_keys[i].localeCompare('stars')===0) {
        cols.push({
          key:this.props.columns_keys[i],
          title:this.props.columns_names[i],
          dataType:type,
          sortDirection: SortDirection.Ascend,
          style: tableStyle
        });
      } else {
        cols.push({
          key:this.props.columns_keys[i],
          title:this.props.columns_names[i],
          dataType:type,
          style: tableStyle
        });
      }
      
    }
    return {
      columns: cols,
      data: this.props.data,
      editingMode: EditingMode.None,
      rowKeyField: 'id',
      sortingMode: SortingMode.Single,

    }
  }

  /*
  fillData(){
    this.setState({
      tableProps:this.fetchData()
    });
  }
  */

  render() {
    //console.log(JSON.stringify(this.state.tableProps));
    return (
      <div className="custom-theme-demo">
      <Table
      //{...this.state.tableProps}
      {...this.fetchData()}
      childComponents={{
        headCell: {
          content: (props) => {
              return <HeadCell {...props}/>;
          }
        },

        
        cellText: {
          content: (props) => {
            switch (props.column.key){
              case 'link':
                return <a href={props.value}>visit</a>;
            }
          }
        }

        


      }}
      dispatch={this.dispatch} />
      </div>
    );
  }

  dispatch(action) {
    this.setState((prevState) => ({
      ...prevState,
      ...{tableProps: kaReducer(prevState.tableProps, action)}
    }));
  }
}

export default TableComponent;


/*
table: {
          elementAttributes: () => ({
            className: 'custom-table' //'table table-striped table-hover table-bordered'
          })
        },
        tableHead: {
          elementAttributes: () => ({
            className: 'thead-dark'
          })
        },
        noDataRow: {
          content: () => 'No Data Found'
        }
*/


/* sample data */
/*
    let tableData=Array(10).fill(undefined).map(
      (_, index) => ({
        column1: `column:1 row:${index}`,
        column2: `column:2 row:${index}`,
        column3: `column:3 row:${index}`,
        column4: `column:4 row:${index}`,
        id: index,
      }),
    );
    */

    /*
    let cols=[
          { key: 'column1', title: 'Column 1', dataType: DataType.String },
          { key: 'column2', title: 'Column 2', dataType: DataType.String },
          { key: 'column3', title: 'Column 3', dataType: DataType.String },
          { key: 'column4', title: 'Column 4', dataType: DataType.String },
        ];
      */

/*
    let tableData=[
        {
          "name":"column:1 row:0",
          "author":"column:2 row:0",
          "year":"column:3 row:0",
          "journal":"column:4 row:0",
          "link":"column:5 row:0",
          "stars":"column:6 row:0",
          "forks":"column:7 row:0",
          "id":0
        },
        {
          "name":"column:1 row:1",
          "author":"column:2 row:1",
          "year":"column:3 row:1",
          "journal":"column:4 row:1",
          "link":"column:5 row:1",
          "stars":"column:6 row:1",
          "forks":"column:7 row:1",
          "id":1
        },
        {
          "name":"column:1 row:2",
          "author":"column:2 row:2",
          "year":"column:3 row:2",
          "journal":"column:4 row:2",
          "link":"column:5 row:2",
          "stars":"column:6 row:2",
          "forks":"column:7 row:2",
          "id":2
        },
        {
          "name":"column:1 row:3",
          "author":"column:2 row:3",
          "year":"column:3 row:3",
          "journal":"column:4 row:3",
          "link":"column:5 row:3",
          "stars":"column:6 row:3",
          "forks":"column:7 row:3",
          "id":3
        },
      ];
      */
    //console.log(tableData[0].name);

/*---- table sample ----*/
    /*
    {
      "columns":
      [
        {"key":"column1","title":"Column 1","dataType":"string"},
        {"key":"column2","title":"Column 2","dataType":"string"},
        {"key":"column3","title":"Column 3","dataType":"string"},
        {"key":"column4","title":"Column 4","dataType":"string"}
      ],
      "data":
      [
        {"column1":"column:1 row:0","column2":"column:2 row:0","column3":"column:3 row:0","column4":"column:4 row:0","id":0},
        {"column1":"column:1 row:1","column2":"column:2 row:1","column3":"column:3 row:1","column4":"column:4 row:1","id":1},
        {"column1":"column:1 row:2","column2":"column:2 row:2","column3":"column:3 row:2","column4":"column:4 row:2","id":2},
        {"column1":"column:1 row:3","column2":"column:2 row:3","column3":"column:3 row:3","column4":"column:4 row:3","id":3},
        {"column1":"column:1 row:4","column2":"column:2 row:4","column3":"column:3 row:4","column4":"column:4 row:4","id":4},
        {"column1":"column:1 row:5","column2":"column:2 row:5","column3":"column:3 row:5","column4":"column:4 row:5","id":5},
        {"column1":"column:1 row:6","column2":"column:2 row:6","column3":"column:3 row:6","column4":"column:4 row:6","id":6},
        {"column1":"column:1 row:7","column2":"column:2 row:7","column3":"column:3 row:7","column4":"column:4 row:7","id":7},
        {"column1":"column:1 row:8","column2":"column:2 row:8","column3":"column:3 row:8","column4":"column:4 row:8","id":8},
        {"column1":"column:1 row:9","column2":"column:2 row:9","column3":"column:3 row:9","column4":"column:4 row:9","id":9}
      ],
      "editingMode":"cell",
      "rowKeyField":"id",
      "sortingMode":"single"
    };
    */