using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Configuration;

namespace FinalProject.Api.Controllers
{
    public class ValuesController : ApiController
    {
        [HttpGet]
        // GET api/values
        public IEnumerable<Assignment> Get()
        {
            var connectionString = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            var assignments = new List<Assignment>();

            var connection = new SqlConnection(connectionString);
            var command = new SqlCommand("select * from dbo.Assignments", connection);
            connection.Open();
            var reader = command.ExecuteReader();

            while (reader.Read())
            {
                int id = Convert.ToInt32(reader["id"]);
                DateTime dueDate = Convert.ToDateTime(reader["DueDate"]);
                string name = reader["Assignment"].ToString();
                string course = reader["Course"].ToString();

                var assignment = new Assignment(dueDate, course, id, name);
                assignments.Add(assignment);

            }
            return assignments;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }
        [HttpPost]
        // POST api/values
        public Assignment Post(Assignment assignment)
        {
            var connectionString = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
            var connection = new SqlConnection(connectionString);
            var add = new SqlCommand("INSERT INTO dbo.Assignments(Course, Assignment, DueDate) VALUES (@course, @name, @dueDate)", connection);
            add.Parameters.AddWithValue("course", assignment.Course);
            add.Parameters.AddWithValue("name", assignment.Name);
            add.Parameters.AddWithValue("dueDate", assignment.DueDate);
            connection.Open();
            add.ExecuteNonQuery();
            connection.Close();
            return assignment;
        }



        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
