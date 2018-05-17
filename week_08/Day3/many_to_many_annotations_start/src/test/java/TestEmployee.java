import db.DBHelper;
import models.Department;
import models.Employee;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.assertEquals;

public class TestEmployee {

    private Employee employee;
    private Department department;

    @After
    public void teardown() throws Exception{
        DBHelper.delete(employee);
        DBHelper.delete(department);
    }

    @Before
    public void before(){
        department = new Department("hr");
        employee = new Employee("jeff", "bridges", 40000, department);
        DBHelper.save(department);
        DBHelper.save(employee);
    }

    @Test
    public void canSave() throws Exception{
        List<Employee> results = DBHelper.getAll(Employee.class);
        assertEquals(1, results.size());
    }

    @Test
    public void canUpdate() throws Exception{
        Employee found = DBHelper.find(Employee.class, employee.getId());
        found.setFirstName("jess");
        DBHelper.update(found);
        found = DBHelper.find(Employee.class, employee.getId());
        assertEquals("jess", found.getFirstName());
    }
}
