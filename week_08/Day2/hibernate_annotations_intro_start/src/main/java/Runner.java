import db.DBHelper;
import models.Department;
import models.Employee;
import models.Manager;

import java.util.List;

public class Runner {

    public static void main(String[] args) {

        Manager manager = new Manager("Scott", "Stevenson", 60000, 100000);
        DBHelper.save(manager);

        Manager manager2 = new Manager("Grant", "Cross", 60000, 100000);
        DBHelper.save(manager);

        Department dept1 = new Department("HR");
        DBHelper.save(dept1);

        Department dept2 = new Department("Sales");
        DBHelper.save(dept2);

        Employee employee1 = new Employee("Al", "Bundy", 35000, manager);
        DBHelper.save(employee1);

        Employee employee2 = new Employee("Peggy", "Bundy", 50000, manager);
        DBHelper.save(employee2);

        Department foundDept = DBHelper.find(Department.class, dept1.getId());
        Employee foundEmp = DBHelper.find(Employee.class, employee1.getId());

        DBHelper.delete(dept2);

        List<Employee> results = DBHelper.getEmployeesByManager(manager);
        Manager found = DBHelper.find(Manager.class, manager.getId());
        found.giveRaise();
        DBHelper.update(found);

    }




    }