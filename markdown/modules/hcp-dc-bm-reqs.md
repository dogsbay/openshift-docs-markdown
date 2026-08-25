{%- set _mod_docs_content_type = "CONCEPT" %}
# Requirements to deploy {{ hcp }} on bare metal in a disconnected environment {id="hcp-dc-bm-reqs_{{ context }}"}

To configure {{ hcp }} in a disconnected environment, you must meet several prerequisites. {._abstract}

*   CPU: The number of CPUs provided determines how many hosted clusters can run concurrently. In general, use 16 CPUs for each node for 3 nodes. For minimal development, you can use 12 CPUs for each node for 3 nodes.
*   Memory: The amount of RAM affects how many hosted clusters can be hosted. Use 48 GB of RAM for each node. For minimal development, 18 GB of RAM might be sufficient.
*   Storage: Use SSD storage for {{ mce_short }}.
*   Management cluster: 250 GB.
*   Registry: The storage needed depends on the number of releases, operators, and images that are hosted. An acceptable number might be 500 GB, preferably separated from the disk that hosts the hosted cluster.
*   Web server: The storage needed depends on the number of ISOs and images that are hosted. An acceptable number might be 500 GB.
*   Production: For a production environment, separate the management cluster, the registry, and the web server on different disks. This example illustrates a possible configuration for production:
*   Registry: 2 TB
*   Management cluster: 500 GB
*   Web server: 2 TB