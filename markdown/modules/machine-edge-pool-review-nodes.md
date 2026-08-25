{% if context == "installing-aws-localzone" %}
{%- set local_zone = true -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying nodes that were created with edge compute pool {id="machine-edge-pool-review-nodes_{{ context }}"}

After you install a cluster that uses AWS {{ zone_type }} infrastructure, check the status of the machine that was created by the machine set manifests created during installation. {._abstract}

**Procedure**

1.  To check the machine sets created from the subnet you added to the `install-config.yaml` file, run the following command:
    ```terminal
    $ oc get machineset -n openshift-machine-api
    ```
{%- if local_zone %}
    ```terminal title="Example output"
    NAME                                  DESIRED   CURRENT   READY   AVAILABLE   AGE
    cluster-7xw5g-edge-us-east-1-nyc-1a   1         1         1       1           3h4m
    cluster-7xw5g-worker-us-east-1a       1         1         1       1           3h4m
    cluster-7xw5g-worker-us-east-1b       1         1         1       1           3h4m
    cluster-7xw5g-worker-us-east-1c       1         1         1       1           3h4m
    ```
{% endif %}
{% if wavelength_zone %}
    ```terminal title="Example output"
    NAME                                         DESIRED   CURRENT   READY   AVAILABLE   AGE
    cluster-7xw5g-edge-us-east-1-wl1-nyc-wlz-1   1         1         1       1           3h4m
    cluster-7xw5g-worker-us-east-1a              1         1         1       1           3h4m
    cluster-7xw5g-worker-us-east-1b              1         1         1       1           3h4m
    cluster-7xw5g-worker-us-east-1c              1         1         1       1           3h4m
    ```
{% endif %}
1.  To check the machines that were created from the machine sets, run the following command:
    ```terminal
    $ oc get machines -n openshift-machine-api
    ```
{%- if local_zone %}
    ```text title="Example output"
    NAME                                        PHASE     TYPE          REGION      ZONE               AGE
    cluster-7xw5g-edge-us-east-1-nyc-1a-wbclh   Running   c5d.2xlarge   us-east-1   us-east-1-nyc-1a   3h
    cluster-7xw5g-master-0                      Running   m6i.xlarge    us-east-1   us-east-1a         3h4m
    cluster-7xw5g-master-1                      Running   m6i.xlarge    us-east-1   us-east-1b         3h4m
    cluster-7xw5g-master-2                      Running   m6i.xlarge    us-east-1   us-east-1c         3h4m
    cluster-7xw5g-worker-us-east-1a-rtp45       Running   m6i.xlarge    us-east-1   us-east-1a         3h
    cluster-7xw5g-worker-us-east-1b-glm7c       Running   m6i.xlarge    us-east-1   us-east-1b         3h
    cluster-7xw5g-worker-us-east-1c-qfvz4       Running   m6i.xlarge    us-east-1   us-east-1c         3h
    ```
{% endif %}
{% if wavelength_zone %}
    ```text title="Example output"
    NAME                                        PHASE     TYPE          REGION      ZONE               AGE
    cluster-7xw5g-edge-us-east-1-wl1-nyc-wlz-1-wbclh  Running   c5d.2xlarge   us-east-1   us-east-1-wl1-nyc-wlz-1  3h
    cluster-7xw5g-master-0                            Running   m6i.xlarge    us-east-1   us-east-1a               3h4m
    cluster-7xw5g-master-1                            Running   m6i.xlarge    us-east-1   us-east-1b               3h4m
    cluster-7xw5g-master-2                            Running   m6i.xlarge    us-east-1   us-east-1c               3h4m
    cluster-7xw5g-worker-us-east-1a-rtp45             Running   m6i.xlarge    us-east-1   us-east-1a               3h
    cluster-7xw5g-worker-us-east-1b-glm7c             Running   m6i.xlarge    us-east-1   us-east-1b               3h
    cluster-7xw5g-worker-us-east-1c-qfvz4             Running   m6i.xlarge    us-east-1   us-east-1c               3h
    ```
{% endif %}
1.  To check nodes with edge roles, run the following command:
    ```terminal
    $ oc get nodes -l node-role.kubernetes.io/edge
    ```
    ```terminal title="Example output"
    NAME                           STATUS   ROLES         AGE    VERSION
    ip-10-0-207-188.ec2.internal   Ready    edge,worker   172m   v1.25.2+d2e245f
    ```

{% if context == "installing-aws-localzone" %}
{%- set local_zone = false -%}
{% endif %}
{% if context == "installing-aws-wavelength-zone" %}
{%- set wavelength_zone = false -%}
{% endif %}