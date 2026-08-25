{%- set _mod_docs_content_type = "SNIPPET" %}

tag::method-machine-template[]
To deploy compute machines with your configuration, configure the appropriate values in a machine template YAML file.
Then, configure a machine set YAML file to reference the machine template when it deploys machines.
end::method-machine-template[]

tag::method-compute-machine-set[]
To deploy compute machines with your configuration, configure the appropriate values in a machine set YAML file to use when it deploys machines.
end::method-compute-machine-set[]

tag::method-machine-template-and-machine-set[]
To deploy compute machines with your configuration, configure the appropriate values in a machine template YAML file and a machine set YAML file that references the machine template when it deploys machines.
end::method-machine-template-and-machine-set[]

tag::method-control-plane-machine-set[]
To deploy control machines with your configuration, configure the appropriate values in your control plane machine set YAML file.

*   For clusters that use the default `RollingUpdate` update strategy, the control plane machine set propagates changes to your control plane configuration automatically.
*   For clusters that use the `OnDelete` update strategy, you must replace your control plane machines manually.
end::method-control-plane-machine-set[]