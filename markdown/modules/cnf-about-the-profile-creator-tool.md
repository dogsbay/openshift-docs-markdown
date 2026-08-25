{%- set _mod_docs_content_type = "CONCEPT" %}
# About the Performance Profile Creator {id="cnf-about-the-profile-creator-tool_{{ context }}"}

The Performance Profile Creator (PPC) is a command-line tool and is delivered with the Node Tuning Operator. You can use the PPC CLI to create a performance profile for your cluster. {._abstract}

Initially, you can use the PPC tool to process the `must-gather` data to display key performance configurations for your cluster, including the following information:

*   NUMA cell partitioning with the allocated CPU IDs
*   Hyper-Threading node configuration

You can use this information to help you configure the performance profile.

Specify performance configuration arguments to the PPC tool to generate a proposed performance profile that is appropriate for your hardware, topology, and use-case.

You can run the PPC by using one of the following methods:

*   Run the PPC by using Podman
*   Run the PPC by using the wrapper script


:::note

Using the wrapper script abstracts some of the more granular Podman tasks into an executable script. For example, the wrapper script handles tasks such as pulling and running the required container image, mounting directories into the container, and providing parameters directly to the container through Podman. Both methods achieve the same result.

:::