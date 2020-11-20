terraform {
  required_version = "~> 0.13"
  required_providers {
    scaleway = {
      source = "scaleway/scaleway"
      version = "1.17.0"
    }
  }
}
provider "scaleway" {
  zone            = "pl-waw-1"
}

resource "scaleway_instance_ip" "api" {}

resource "scaleway_instance_server" "api" {
  type  = "DEV1-S"
  image = "ubuntu_focal"
  tags = [ "api", "hackathon", "NodeJs" ]
  name = "my-super-api"
  ip_id = scaleway_instance_ip.api.id
}

resource "null_resource" "api" {
  triggers = {
    server_id = scaleway_instance_server.api.id
    playbook = md5(file("deploy.yml"))
  }

  provisioner "local-exec" {
    command = "ansible-playbook -i ${scaleway_instance_ip.api.address}, deploy.yml"
  }
}
