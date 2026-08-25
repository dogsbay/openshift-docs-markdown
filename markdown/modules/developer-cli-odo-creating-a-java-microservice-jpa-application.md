{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a Java MicroServices JPA application {id="creating-java-ms-jpa_{{ context }}"}

With `odo`, you can create and manage a sample Java MicroServices JPA application.

**Procedure**

1.  Clone the sample application:
    ```terminal
    $ git clone -b jpa-sample https://github.com/redhat-developer/application-stack-samples.git
    ```
1.  Navigate to the application directory:
    ```terminal
    $ cd ./application-stack-samples/jpa
    ```
1.  Initialize the project:
    ```terminal
    $ odo create java-openliberty java-application
    ```
1.  Push the application to the cluster:
    ```terminal
    $ odo push
    ```

    The application is now deployed to the cluster.
1.  View the status of the cluster by streaming the {{ product_title }} logs to the terminal:
    ```terminal
    $ odo log
    ```

    Notice the test failures and `UnknownDatabaseHostException` error. This is because your application does not have a database yet:
    ```terminal
    [INFO] [err] java.net.UnknownHostException: ${DATABASE_CLUSTERIP}
    [INFO] [err]    at java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:220)
    [INFO] [err]    at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)
    [INFO] [err]    at java.base/java.net.Socket.connect(Socket.java:609)
    [INFO] [err]    at org.postgresql.core.PGStream.<init>(PGStream.java:68)
    [INFO] [err]    at org.postgresql.core.v3.ConnectionFactoryImpl.openConnectionImpl(ConnectionFactoryImpl.java:144)
    [INFO] [err]    ... 86 more
    [ERROR] Tests run: 2, Failures: 1, Errors: 1, Skipped: 0, Time elapsed: 0.706 s <<< FAILURE! - in org.example.app.it.DatabaseIT
    [ERROR] testGetAllPeople  Time elapsed: 0.33 s  <<< FAILURE!
    org.opentest4j.AssertionFailedError: Expected at least 2 people to be registered, but there were only: [] ==> expected: <true> but was: <false>
            at org.example.app.it.DatabaseIT.testGetAllPeople(DatabaseIT.java:57)

    [ERROR] testGetPerson  Time elapsed: 0.047 s  <<< ERROR!
    java.lang.NullPointerException
            at org.example.app.it.DatabaseIT.testGetPerson(DatabaseIT.java:41)

    [INFO]
    [INFO] Results:
    [INFO]
    [ERROR] Failures:
    [ERROR]   DatabaseIT.testGetAllPeople:57 Expected at least 2 people to be registered, but there were only: [] ==> expected: <true> but was: <false>
    [ERROR] Errors:
    [ERROR]   DatabaseIT.testGetPerson:41 NullPointer
    [INFO]
    [ERROR] Tests run: 2, Failures: 1, Errors: 1, Skipped: 0
    [INFO]
    [ERROR] Integration tests failed: There are test failures.
    ```
1.  Create an ingress URL to access the application:
    ```terminal
    $ odo url create --port 8080
    ```
1.  Push the changes to your cluster:
    ```terminal
    $ odo push
    ```
1.  Display the created URL:
    ```terminal
    $ odo url list
    ```
    ```terminal title="Example output"
    Found the following URLs for component mysboproj
    NAME               STATE      URL                                           PORT     SECURE     KIND
    java-application-8080     Pushed     http://java-application-8080.apps-crc.testing     8080      false      ingress
    ```

    The application is now deployed to the cluster and you can access it by using the URL that is created.
1.  Use the URL to navigate to the `CreatePerson.xhtml` data entry page and enter a username and age by using the form. Click **Save**.

    Note that you cannot see the data by clicking the **View Persons Record List** link since your application does not have a database connected yet.