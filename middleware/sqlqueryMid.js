const err = 'error query'
module.exports = () => {
  return {
    find: (table_name, params, os) => {
      if (typeof table_name === 'string' && typeof params === 'string') {
        let qu = `SELECT ${params} FROM ${table_name} ${os};`
        return qu
      } else {
        return err
      }
    },
    findAll: async (table_name) => {
      if (typeof table_name === 'string') {
        let qu = `SELECT * FROM ${table_name};`
        return qu
      } else {
        return err
      }
    },
    insert: (table_name, pa1) => {
      if (typeof table_name === 'string' && typeof pa1 === 'object') {
        // INSERT into api_group (name) VALUES ('123465');
        let str1 = '', str2 = ''
        for (let i in pa1) {
          str1 += i
          str2 += pa1[i]
        }
        let q1 = str1.substr(0, str1.length - 1)
        let q2 = str2.substr(0, str1.length - 1)
        return `INSERT INTO ${table_name} (${q1}) VALUES (${q2});`
      } else {
        return err
      }
    },
    update: (table_name, pa1, os) => {
      // UPDATE persondata SET age=age*2, age=age+1;
      if (typeof table_name === 'string' && typeof pa1 === 'object') {
        let showKey = Object.keys(pa1)
        let showVlaue = Object.values(pa1)
        if (showKey.length === 1 && showVlaue.length === 1) {
          return `UPDATE ${table_name} SET ${showKey[0]}=${showVlaue} ${os};`
        } else {
          return err
        }
      } else {
        return err
      }
    },
    delete: (table_name, os) => {
      if (typeof table_name === 'string' && os) {
        if (typeof os !== 'boolean') {
          return `DELETE FROM ${table_name} ${os};`
        } else {
          return `DELETE FROM ${table_name};`
        }
      } else {
        return err
      }
    }
  }
}
