{%- set _mod_docs_content_type = "PROCEDURE" %}
# Starting the {{ microshift_short }} service {id="starting-microshift_service_{{ context }}"}

Use the following procedure to start the {{ microshift_short }} service. {._abstract}

**Prerequisites**

*   You have installed {{ microshift_short }} from an RPM package.

**Procedure**

1.  As a root user, start the {{ microshift_short }} service by entering the following command:
    ```terminal
    $ sudo systemctl start microshift
    ```
1.  Optional: To configure your {{ op_system_base }} machine to start {{ microshift_short }} when your machine starts, enter the following command:
    ```terminal
    $ sudo systemctl enable microshift
    ```
1.  Optional: To disable {{ microshift_short }} from automatically starting when your machine starts, enter the following command:
    ```terminal
    $ sudo systemctl disable microshift
    ```

    :::note

    The first time that the {{ microshift_short }} service starts, it downloads and initializes the container images for {{ microshift_short }}. As a result, it can take several minutes for {{ microshift_short }} to start the first time that the service is deployed. Boot time is reduced for subsequent starts of the {{ microshift_short }} service.
    
    :::