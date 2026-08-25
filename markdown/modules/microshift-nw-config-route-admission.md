{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the route admission policy {id="microshift-configuring-route-admission_{{ context }}"}

By default, {{ microshift_short }} allows routes in multiple namespaces to use the same hostname. To prevent routes from claiming the same hostname in different namespaces, you can configure the route admission policy. {._abstract}

**Prerequisites**

*   You installed {{ microshift_short }}.
*   You created a {{ microshift_short }} `config.yaml` file.
*   You installed the {{ oc_first }}.

    :::tip

    If you complete all the configurations that you need to make in the {{ microshift_short }} `config.yaml` file at the same time, you can minimize system restarts.
    
    :::


**Procedure**

1.  To prevent routes in different namespaces from claiming the same hostname, update the `namespaceOwnership` field value to `Strict` in the {{ microshift_short }} `config.yaml` file. See the following example:
    ```yaml title="Example config.yaml route admission policy"
    # ...
    ingress:
      routeAdmissionPolicy:
        namespaceOwnership: Strict
    # ...
    ```

    where:

    `ingress.routeAdmissionPolicy.namespaceOwnership`
    :   Specifies the route admission policy. Prevents routes in different namespaces from claiming the same host. Valid values are `Strict` and `InterNamespaceAllowed`. If you delete the value in a customized `config.yaml`, the `InterNamespaceAllowed` value is set automatically.
1.  To apply the configuration, restart the {{ microshift_short }} service by running the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```