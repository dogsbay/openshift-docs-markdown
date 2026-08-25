{%- set _mod_docs_content_type = "PROCEDURE" %}
# Find the hostname of the load balancer in your cluster {id="cloud-experts-update-component-routes-find-lb-hostname_{{ context }}"}

When you create a cluster, the service creates a load balancer and generates a hostname for that load balancer. We need to know the load balancer hostname in order to create DNS records for our cluster. You can find the hostname by using the {{ oc_first }} tool. {._abstract}

**Procedure**

*   Run the following command against the `openshift-ingress` namespace. 
    ```bash
    $ oc get svc -n openshift-ingress
    NAME            TYPE          CLUSTER-IP     EXTERNAL-IP                                             PORT(S)                     AGE
    router-default  LoadBalancer  172.30.237.88  a234gsr3242rsfsfs-1342r624.us-east-1.elb.amazonaws.com  80:31175/TCP,443:31554/TCP  76d
    ```

    The hostname of the load balancer is the `EXTERNAL-IP` associated with the `router-default` service in the `openshift-ingress` namespace. In our case, the hostname is `a234gsr3242rsfsfs-1342r624.us-east-1.elb.amazonaws.com`.

    Save this value for later, as we will need it to configure DNS records for our new component route hostnames.