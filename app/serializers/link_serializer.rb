class LinkSerializer < ActiveModel::Serializer
  attributes :id, :source, :target, :code, :project
end
