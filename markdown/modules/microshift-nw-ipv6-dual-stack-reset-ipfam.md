{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resetting the IP family policy for application pods and services {id="microshift-nw-ipv6-dual-stack-reset-ipfam_{{ context }}"}

The default `PreferSingleStack` value does not change when you migrate the {{ microshift_short }} node to dual-stack.
To enable dual-stack networking in application pods and services on a node that uses dual-stack, set the `ipFamilyPolicy` field to `PreferDualStack` or `RequireDualStack` and restart the pods.  {._abstract}

**Prerequisites**

*   You used the {{ microshift_short }} `config.yaml` to define a dual-stack network with an IPv6 address family.

**Procedure**

1.  Set the `spec.ipFamilyPolicy` field to a valid value for dual-stack networking in your service or pod by using the following example:
    ```yaml title="Example dual-stack network configuration for a service"
    kind: Service
    apiVersion: v1
    metadata:
      name: microshift-new-service
      labels: app: microshift-application
    spec:
      type: NodePort
      ipFamilyPolicy: PreferDualStack
    # ...
    ```

    where:

    `spec.ipFamilyPolicy`
    :   Required. Specifies the IP family policy for the service. Valid values are `PreferDualStack` and `RequireDualStack`. The value you set depends on the requirements of your application. `PreferSingleStack` is the default value for the `ipFamilyPolicy` field.

1.  Restart any application pods that do not have a `hostNetwork` defined. Pods that do have a `hostNetwork` defined do not need to be restarted to update the `ipFamilyPolicy` value.

    :::note

    {{ microshift_short }} system services and pods are automatically updated when the `ipFamilyPolicy` value is updated.
    
    :::