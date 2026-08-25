{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable the router {id="microshift-disabling-the-router_{{ context }}"}

To disable the router in {{ microshift_short }} when inbound services are not required, including in industrial IoT environments where pods connect only to southbound operational systems and northbound cloud-data systems, set `ingress.status` to `Removed` in the `config.yaml` file and restart the service. {._abstract}

**Prerequisites**

*   You installed {{ microshift_short }}.
*   You created a {{ microshift_short }} `config.yaml` file.
*   The {{ oc_first }} is installed.


:::tip

If you complete all the configurations that you need to make in the {{ microshift_short }} `config.yaml` file at the same time, you can minimize system restarts.

:::


**Procedure**

1.  Update the value of `ingress.status` field to `Removed` in the {{ microshift_short }} `config.yaml` file as shown in the following example:
    ```yaml title="Example config.yaml ingress stanza"
    # ...
    ingress:
      ports:
        http: 80
        https: 443
      routeAdmissionPolicy:
        namespaceOwnership: InterNamespaceAllowed
      status: Removed
    # ...
    ```

    where:

    `ingress.status`
    :   Specifies whether the ingress ports remain open. When the value is set to `Removed`, the ports listed in `ingress.ports` are automatically closed. Any other settings in the `ingress` stanza are ignored, for example, any values in the `routeAdmissionPolicy.namespaceOwnership` field.
1.  Restart the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```

    :::note

    The {{ microshift_short }} service outputs current configurations during restarts.
    
    :::


**Verification**

*   After the system restarts, verify that the router has been removed and that ingress is stopped by running the following command:
    ```terminal
    $ oc -n openshift-ingress get svc
    ```
    ```text title="Expected output"
    No resources found in openshift-ingress namespace.
    ```