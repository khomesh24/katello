module Katello
  class Content < Katello::Model
    include Glue::Candlepin::ProductContent if SETTINGS[:katello][:use_cp]

    has_many :product_contents, :class_name => 'Katello::ProductContent', :dependent => :destroy
    has_many :products, :through => :product_contents

    validates :label, :uniqueness => true
    validates :cp_content_id, :uniqueness => true
  end
end
