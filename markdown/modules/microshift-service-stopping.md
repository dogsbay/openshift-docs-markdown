{%- set _mod_docs_content_type = "PROCEDURE" %}
# Stop the {{ microshift_short }} service {id="stopping-microshift-service_{{ context }}"}

When you want to stop the {{ microshift_short }} service, you must stop both the service and any deployed workloads. {._abstract}

**Prerequisites**

*   The {{ microshift_short }} service is running.

**Procedure**

1.  Enter the following command to stop the {{ microshift_short }} service:
    ```terminal
    $ sudo systemctl stop microshift
    ```
1.  Workloads deployed on {{ microshift_short }} might continue running even after the {{ microshift_short }} service has been stopped. Enter the following command to display running workloads:
    ```terminal
    $ sudo crictl ps -a
    ```
1.  Enter the following commands to stop the deployed workloads:
    ```terminal
    $ sudo systemctl stop kubepods.slice
    ```