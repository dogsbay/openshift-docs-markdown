{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring huge pages {id="cnf-configuring-huge-pages_{{ context }}"}

Because nodes must pre-allocate huge pages used in an {{ product_title }} cluster, use the Node Tuning Operator to allocate huge pages on a specific node. {._abstract}

{{ product_title }} provides a method for creating and allocating huge pages. Node Tuning Operator provides an easier method for doing  this using the performance profile.

**Procedure**

*   In the `hugepages.pages` section of the performance profile, specify multiple blocks of `size`, `count`, and, optionally, `node`:
    ```yaml title="Example configuration"
    hugepages:
       defaultHugepagesSize: "1G"
       pages:
       - size:  "1G"
         count:  4
         node:  0
    # ...
    ```

    where:

    `hugepages.pages.node`
    :   Specifies the `node` that is the NUMA node in which the huge pages are allocated. If you omit `node`, the pages are evenly spread across all NUMA nodes.

    :::note

    Wait for the relevant machine config pool status that indicates the update is finished.
    
    :::

    These are the only configuration steps you need to do to allocate huge pages.

**Verification**

*   To verify the configuration, see the `/proc/meminfo` file on the node:
    ```terminal
    $ oc debug node/ip-10-0-141-105.ec2.internal
    ```
    ```terminal
    # grep -i huge /proc/meminfo
    ```
    ```terminal title="Example output"
    AnonHugePages:    ###### ##
    ShmemHugePages:        0 kB
    HugePages_Total:       2
    HugePages_Free:        2
    HugePages_Rsvd:        0
    HugePages_Surp:        0
    Hugepagesize:       #### ##
    Hugetlb:            #### ##
    ```
*   Use `oc describe` to report the new size:
    ```terminal
    $ oc describe node worker-0.ocp4poc.example.com | grep -i huge
    ```
    ```terminal title="Example output"
                                       hugepages-1g=true
     hugepages-###:  ###
     hugepages-###:  ###
    ```