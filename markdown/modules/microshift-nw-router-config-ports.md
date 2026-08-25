{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring router ports {id="microshift-config-router-ports_{{ context }}"}

To bind the ingress router to specific HTTP and HTTPS port numbers in {{ microshift_short }}, you can edit the `ingress.ports.http` and `ingress.ports.https` settings in `config.yaml` file. {._abstract}

**Prerequisites**

*   You installed {{ microshift_short }}.
*   You created a {{ microshift_short }} `config.yaml` file.
*   The {{ oc_first }} is installed.


:::tip

If you complete all the configurations that you need to make in the {{ microshift_short }} `config.yaml` file at the same time, you can minimize system restarts.

:::


**Procedure**

1.  Update the {{ microshift_short }} `config.yaml` port values in the `ingress.ports.http` and `ingress.ports.https` fields to the ports you want to use:
    ```yaml title="Example config.yaml router settings"
    # ...
    ingress:
      ports:
        http: 80
        https: 443
      routeAdmissionPolicy:
        namespaceOwnership: InterNamespaceAllowed
      status: Managed
    # ...
    ```

    where:

    `ingress.ports`
    :   Specifies the HTTP and HTTPS port numbers to bind the ingress router to. This field is customizable. Valid values for both port entries are a single, unique port in the 1-65535 range. The values of the `ports.http` and `ports.https` fields cannot be the same.

    `status`
    :   Specifies the status of the ingress ports. The default value is `Managed`. `Managed` is required for the ingress ports to remain open.
1.  Restart the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```