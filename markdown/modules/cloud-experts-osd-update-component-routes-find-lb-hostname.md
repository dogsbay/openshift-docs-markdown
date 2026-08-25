{%- set _mod_docs_content_type = "PROCEDURE" %}
# Finding the load balancer IP address {id="cloud-experts-osd-update-component-routes-find-lb-hostname_{{ context }}"}

Find the load balancer internet protocol (IP) address of your cluster to create domain name system (DNS) records for the component route hostnames. {._abstract}

**Procedure**

1.  Retrieve the IP address of the load balancer by running the following command, using the namespace for the load balancer: 
    ```bash
    $ oc get svc -n <namespace>
    ```

    The load balancer IP of the load balancer is the `EXTERNAL-IP` associated with the `router-default` service in the `openshift-ingress` namespace.
    ```bash title="Example output"
    $ oc get svc -n openshift-ingress
    NAME            TYPE          CLUSTER-IP     EXTERNAL-IP        PORT(S)                     AGE
    router-default  LoadBalancer  172.30.237.88  203.0.113.10      80:31175/TCP,443:31554/TCP  76d
    ```

    In this example, the load balancer IP is `203.0.113.10`.
1.  Save this value for later, as you need it to configure DNS records for your new component route hostnames.
1.  Create an A record in your DNS settings, pointing the domain to the IP address of the load balancer for router-default.