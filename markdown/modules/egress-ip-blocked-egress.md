{%- set _mod_docs_content_type = "PROCEDURE" %}
# Test blocked egress {id="cloud-experts-consistent-egress-ip-blocked-egress_{{ context }}"}

This procedure is optional. You can test if your egress IP configuration correctly blocks traffic. {._abstract}

**Procedure**

1.  Test that the traffic is successfully blocked when the egress rules do not apply by running the following command:
    ```terminal
    $ oc run \
      demo-egress-pod-fail \
      -it \
      --namespace=demo-egress-pod \
      --env=LOAD_BALANCER_HOSTNAME=$LOAD_BALANCER_HOSTNAME \
      --image=registry.access.redhat.com/ubi9/ubi -- \
      bash
    ```
1.  Send a request to the load balancer by running the following command:
    ```terminal
    $ curl -s http://$LOAD_BALANCER_HOSTNAME
    ```

    If the command is unsuccessful, egress is successfully blocked.
1.  Exit the pod by running the following command:
    ```terminal
    $ exit
    ```