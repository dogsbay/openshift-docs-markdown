{%- set _mod_docs_content_type = "PROCEDURE" %}
# Attaching an ExternalIP to a service {id="nw-service-externalip-create_{{ context }}"}

You can attach an ExternalIP resource to a service. If you configured your cluster to automatically attach the resource to a service, you might not need to manually attach an ExternalIP to the service. {._abstract}

The examples in the procedure use a scenario that manually attaches an ExternalIP resource to a service in a cluster with an IP failover configuration. 

**Procedure**

1.  Confirm compatible IP address ranges for the ExternalIP resource by entering the following command in your CLI:
    ```terminal
    $ oc get networks.config cluster -o jsonpath='{.spec.externalIP}{"\n"}'
    ```

    :::note

    If `autoAssignCIDRs` is set and you did not specify a value for `spec.externalIPs` in the ExternalIP resource, {{ product_title }} automatically assigns ExternalIP to a new `Service` object.
    
    :::

1.  Choose one of the following options to attach an ExternalIP resource to the service:
    1.  If you are creating a new service, specify a value in the `spec.externalIPs` parameter and array of one or more valid IP addresses in the `allowedCIDRs` parameter.
        ```yaml title="Example of service YAML configuration file that supports an ExternalIP resource"
        apiVersion: v1
        kind: Service
        metadata:
          name: svc-with-externalip
        spec:
          externalIPs:
            policy:
              allowedCIDRs:
              - 192.168.123.0/28
        # ...
        ```
    1.  If you are attaching an ExternalIP to an existing service, enter the following command. Replace `<name>` with the service name. Replace `<ip_address>` with a valid ExternalIP address. You can provide multiple IP addresses separated by commas.
        ```terminal
        $ oc patch svc <name> -p \
          '{
            "spec": {
              "externalIPs": [ "<ip_address>" ]
            }
          }'
        ```

        For example:
        ```terminal
        $ oc patch svc mysql-55-rhel7 -p '{"spec":{"externalIPs":["192.174.120.10"]}}'
        ```
        ```terminal title="Example output"
        "mysql-55-rhel7" patched
        ```
1.  To confirm that an ExternalIP address is attached to the service, enter the following command. If you specified an ExternalIP for a new service, you must create the service first.
    ```terminal
    $ oc get svc
    ```
    ```terminal title="Example output"
    NAME               CLUSTER-IP      EXTERNAL-IP     PORT(S)    AGE
    mysql-55-rhel7     172.30.131.89   192.174.120.10  3306/TCP   13m
    ```