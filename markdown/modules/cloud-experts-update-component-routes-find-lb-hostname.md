{%- set _mod_docs_content_type = "PROCEDURE" %}
# Find the hostname of the load balancer in your cluster {id="cloud-experts-update-component-routes-find-lb-hostname_{{ context }}"}

When you create a cluster, the service creates a load balancer and generates a hostname for that load balancer. You need to know the load balancer hostname to create Domain Name System (DNS) records for your cluster. {._abstract}

**Procedure**

*   Run the following command against the `openshift-ingress` namespace.
    ```terminal
    $ oc get svc -n openshift-ingress
    ```
    ```text title="Example output"
    NAME            TYPE          CLUSTER-IP     EXTERNAL-IP                                             PORT(S)                     AGE
    router-default  LoadBalancer  172.30.237.88  a234gsr3242rsfsfs-1342r624.us-east-1.elb.amazonaws.com  80:31175/TCP,443:31554/TCP  76d
    ```

    The hostname of the load balancer is the `EXTERNAL-IP` associated with the `router-default` service in the `openshift-ingress` namespace. In this example, the hostname is `a234gsr3242rsfsfs-1342r624.us-east-1.elb.amazonaws.com`.

    Save this value, because you need it to configure DNS records for your new component route hostnames.