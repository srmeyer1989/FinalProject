using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalProject.Api
{
    public class Assignment
    {
        public int Id { get; set; }
        public DateTime DueDate { get; set; }
        public string Course { get; set; }
        public string Name { get; set; }

        public Assignment()
        {

        }
        public Assignment(DateTime dueDate, string course, int id, string name)
        {
            DueDate = dueDate;
            Course = course;
            Name = name;
            Id = id;
        }
    }
}