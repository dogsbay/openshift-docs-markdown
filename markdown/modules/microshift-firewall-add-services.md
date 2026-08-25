{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add services to open ports {id="microshift-firewall-add-services_{{ context }}"}

To open default ports for predefined services through firewalld on your {{ microshift_short }} instance, you can use the `firewall-cmd` command. Add each service with the `--add-service` option. {._abstract}

**Procedure**

1.  Optional: You can view all predefined services in firewalld by running the following command
    ```terminal
    $ sudo firewall-cmd --get-services
    ```
1.  To open a service that you want on a default port, run the following example command: 
    ```terminal
    $ sudo firewall-cmd --add-service=mdns
    ```